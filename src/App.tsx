import "./App.css";
import { Container, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { WeatherConstruct } from "./utils/weather";
import type { weatherDataType } from "./types";

import WeatherInput from "./components/WeatherInput";
import WeatherDetails from "./components/WeatherDetails";
import WeatherBackground from "./components/WeatherBackground";
import  Footer from "./components/Footer";

function App() {
  const [weatherLocation, setWeatherLocation] = useState<string>("Roma ");
  const [weatherData, setWeatherData] = useState<weatherDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const apikey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apikey}&units=metric&lang=it`;

  function fetchWeather(): void {
    setLoading(true);

    fetch(apiurl)
      .then((res) => {
        if (!res.ok) {
          console.log("errore nella fetch");
          setLoading(false);
          setFetchError(true);
          return null;
        } else {
          console.log("fetch ok");
          setFetchError(false);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);

        const weatherConstrunctData = WeatherConstruct(data);

        setWeatherData(weatherConstrunctData);

        setLoading(false);
      });
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>

 <WeatherBackground />
      <main className=" p- vh-100 d-flex justify-content-center flex-column bg-dark bg-opacity-25 align-items-center">
     
      <h1 className="text-white text-center text-uppercase mt-auto fadeup"><strong>Simple</strong><br/>Weather</h1>

        <Container className="bg-body-tertiary p-3 rounded-4 w-300 shadow weather-container mb-auto mt-3 fadeup">
          <WeatherInput
            setLocation={setWeatherLocation}
            fetchWeather={fetchWeather}
          />

          {loading ? (
            <div className="w-100 d-flex flex-column align-items-center justify-content-center spinner-container fadeup">
              <Spinner animation="border" variant="dark" className="" />
            </div>
          ) : (
            <WeatherDetails weatherData={weatherData} fetchError={fetchError} />
          )}
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
