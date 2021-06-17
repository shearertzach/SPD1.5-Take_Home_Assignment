import { useState } from "react"

import ZipCodeInput from "../components/ZipCodeInput"
import Alert from "../components/Alert"
import GetWeatherButton from "../components/GetWeatherButton"
import WeatherData from "../components/WeatherData"
import Loading from '../components/Loading'

export default function Home() {
  const [zip, setZip] = useState('')
  const [data, setData] = useState(null)
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchWeather(zipCode) {
    setAlert(null)
    setData(null)
    setLoading(true)

    if (!zipCode) {
      setLoading(false)
      return setAlert({ type: 'Error', message: 'You must enter a Zip Code' })
    }

    const url = `http://localhost:5000/api/weather/get_weather_by_zip/${zipCode}`
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const res = await fetch(url, options)
    const json = await res.json()

    if (json.cod !== 200) {
      setLoading(false)
      setAlert({ type: 'Error', message: json.message })
    } else {
      setLoading(false)
      setAlert({ type: 'Success', message: 'Successfully Fetched Weather' })
      setData(json)
      setZip('')
    }
  }

  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col bg-gray-800'>
      {alert ? <Alert type={alert.type} value={alert.message} handleAlert={setAlert} /> : null}

      {data ? <WeatherData data={data} /> : null}

      {!loading ?
        <div className='w-11/12 max-w-lg flex items-center justify-center'>
          <ZipCodeInput name={'Zip Code'} value={zip} handleChange={setZip} />
          <GetWeatherButton title={'Get Weather'} action={fetchWeather} zip={zip} />
        </div>
        :
        <Loading />
      }

    </div>
  )
}
