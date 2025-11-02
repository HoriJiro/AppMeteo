import { Card } from 'react-bootstrap'


function WeatherDetails({weatherData}) {

    return (
 <Card className="text-center mt-3 bg-transparent border-0">
  <Card.Body>
    <Card.Title>Nome della città</Card.Title>
    <Card.Subtitle className="mb-2">Paese</Card.Subtitle>
    {/* <Card.Img variant="top" src="..." /> */}
    <i className='bi bi-cloudy fs-icon'></i>
    <Card.Text>
      <h4 className='fw-bold'>Nuvolo</h4>
      <div className='d-flex gap-2 justify-content-center align-items-center'>
      <h6><i className="bi bi-thermometer"></i> 37°C</h6>
      | <h6><i className="bi bi-wind"></i> 70km/h</h6>
      | <h6><i className="bi bi-droplet"></i> 22%</h6>
      </div>
    </Card.Text>
  </Card.Body>
</Card>
    )
   
}

export default WeatherDetails;