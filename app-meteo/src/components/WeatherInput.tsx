import { Form, Button } from "react-bootstrap";

function WeatherInput({setLocation}) {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex mx-auto">
        <Form.Control
          type="text"
          className="rounded-start-pill"
          placeholder="Cerca una città..."
        />
        <Button type="submit" className="rounded-end-pill">
          <i className="bi bi-search"></i>
        </Button>
      </Form.Group>
    </Form>
  );
}

export default WeatherInput;
