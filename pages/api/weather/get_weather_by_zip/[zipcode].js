export default async function getWeatherbyZip(req, res) {
    if (req.method !== 'GET') return res.status(400).json({ message: 'Request must be a GET method' })

    const apiKey = process.env.api_key

    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${req.query.zipcode}&appid=${apiKey}`
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    try {
        await fetch(url, options)
        .then(responce => responce.json())
        .then(json => {
            return res.status(200).json(json)
        })
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}