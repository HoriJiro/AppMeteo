import { Container }  from 'react-bootstrap';
import { useState } from 'react';
import './App.css'
import WeatherInput from './components/WeatherInput';
import WeatherDetails from './components/WeatherDetails';



function App() {
  const api_key = "0cc86d16bf572f78cdc96c096c7627e5"
  const [location, setLocation] = useState<string>('Napoli');
  const [weatherData, setWeatherData] = useState({});
  return (
    <>
<main className='w-100 vh-100 bg-dark d-flex justify-content-center align-items-center'>
<Container className="w-25 bg-light p-3 rounded w-300 sha">
  <WeatherInput setLocation={setLocation}/>
  <WeatherDetails weatherData={weatherData} />
</Container>
</main>
    </>
  )
}

export default App
