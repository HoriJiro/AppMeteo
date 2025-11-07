import { Card } from 'react-bootstrap'
import type { weatherDataType } from '../types';


function WeatherDetails(
  {weatherData, fetchError} :{weatherData: weatherDataType | null, fetchError: boolean}) {

function getWeatherIcon(weather: string) {
  switch (weather) {
    case "Clouds":
      return "bi-cloud";
    case "Rain":
      return "bi-cloud-rain";
    case "Clear":
      return "bi-sun";
    case "Snow":
      return "bi-cloud-snow";
    case "Drizzle":
      return "bi-cloud-drizzle";
    case "Thunderstorm":
      return "bi-cloud-lightning-rain";
    default:
      return "bi-sun";
  }
}

const weatherIcon = getWeatherIcon(weatherData?.weather || "");
    
  if (fetchError) {
    return (<>
    <Card className="text-center mt-3 bg-transparent border-0 fadeup">
  <Card.Body>
    <Card.Title className='fw-bold'>Chomusuke </Card.Title>
    <Card.Subtitle className="mb-2">ちょむすけ</Card.Subtitle>
    <Card.Img variant="top" className='w-75' src="/public/Chomusuke.webp" />

      <h4 className='fw-bold'>Dark God</h4>
      <p className='fs-7 mb-4 text-capitalize'>Complimenti! hai trovato Chomusuke!</p>

      <div className='d-flex gap-3 justify-content-center align-items-center'>
      <h6><i className="bi bi-thermometer"></i>666°C</h6>
      <h6><i className="bi bi-wind"></i> 300m/s</h6>
      <h6><i className="bi bi-droplet"></i>0%</h6>
      </div>    

  </Card.Body>
</Card>
    </>)
  }

  if(!weatherData) {
    return null;
  }

    return (
 <Card className="text-center mt-3 bg-transparent border-0 fadeup ">
  <Card.Body>
    <Card.Title className='fw-bold'>{weatherData.place}</Card.Title>
    <Card.Subtitle className="mb-2">{weatherData.country}</Card.Subtitle>
    {/* <Card.Img variant="top" src="..." /> */}
    <i className={`bi ${weatherIcon} fs-icon`}></i>

      <h4 className='fw-bold'>{weatherData.weather}</h4>
      <p className='fs-7 mb-4 text-capitalize'>{weatherData.weatherDescription}</p>

      <div className='d-flex gap-3 justify-content-center align-items-center'>
      <h6><i className="bi bi-thermometer"></i>{weatherData.temp}°C</h6>
      <h6><i className="bi bi-wind"></i> {weatherData.wind}m/s</h6>
      <h6><i className="bi bi-droplet"></i>{weatherData.humidity}%</h6>
      </div>    

  </Card.Body>
</Card>
    )
   
}

export default WeatherDetails;