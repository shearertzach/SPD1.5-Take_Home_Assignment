export default function WeatherData(props) {
    const { data } = props
    const { main, weather, wind } = data

    const { temp, temp_min, temp_max, humidity } = main

    const weatherDesc = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1).toLowerCase()

    return (
        <div className='w-11/12 max-w-lg p-3 bg-white rounded-md mb-5'>
            <div className='w-full p-3 bg-gray-200 rounded-md flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-xl font-medium'>{data.name}</p>
                    <p className='text-xl font-medium'>{data.main.temp.toFixed(0)} &#176;</p>
                </div>
                <hr className='border-2 border-gray-300 my-2 rounded-lg' />
                <p className='text-xl mb-3'>Current Weather: <span className='font-medium'>{weatherDesc}</span></p>
                <p className='text-xl mb-3'>Temperatures</p>
                <div className='flex flex-col ml-5 mb-3'>
                    <p className='text-lg font-medium'>Current: <span className='font-normal'>{temp.toFixed(0)} &#176;</span></p>
                    <p className='text-lg font-medium'>Low: <span className='font-normal'>{temp_min.toFixed(0)} &#176;</span></p>
                    <p className='text-lg font-medium'>High: <span className='font-normal'>{temp_max.toFixed(0)} &#176;</span></p>
                    <p className='text-lg font-medium'>Humidity: <span className='font-normal'>{humidity.toFixed(0)}%</span></p>

                </div>
                <p className='text-xl mb-3'>Wind Speed: <span className='font-medium'>{wind.speed.toFixed(0)} mph</span></p>

            </div>
        </div>
    )
}
