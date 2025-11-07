import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function WeatherInput({
  setLocation,
  fetchWeather,
}: {
  setLocation: (data: string) => void;
  fetchWeather: () => void;
}) {

  const [darkMode, setdarkMode] = useState<boolean>(false)

useEffect(() => {
  if (darkMode) {
  document.documentElement.setAttribute("data-bs-theme", "dark");}
   else {
  document.documentElement.setAttribute("data-bs-theme", "light");}}, [darkMode]
)

  return (
    <Form onSubmit={(e) => {e.preventDefault();fetchWeather();}}
    >
      <Form.Group className="mb-3 d-flex mx-auto bg-dark rounded-pill">
        <Form.Control
          type="text"
          className="border-0 bg-dark rounded-start-pill text-white placeholder-white shadow-none"
          placeholder="Cerca una città..."
          onChange={(e) => {
            setLocation(String(e.target.value));
          }}
        />
         <Button variant="dark" onClick={() =>setdarkMode(!darkMode)} className="rounded-0 border-0">
          <i className={darkMode ? "bi bi-toggle-off" : "bi bi-toggle-on"}></i>
        </Button>
        <Button variant="dark" type="submit" className="rounded-end-pill">
          <i className="bi bi-search"></i>
        </Button>
       
      </Form.Group>
    </Form>
  );
}

export default WeatherInput;
