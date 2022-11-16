import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import equateur from "./equateur.jpg";
import qatar from "./qatar.png";
import { useState } from "react";

function App() {
  const [variant, setVariant] = useState("Info");
  const [variant2, setVariant2] = useState("Info");

  const getRandomInt = () => {
    let ran = Math.floor(Math.random() * 3);
    if (ran === 1) {
      setVariant("Success");
      setVariant2("Danger");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
    }
    if (ran === 0) {
      setVariant2("Light");
      setVariant("Light");
    }
  };
  return (
    <div>
      <Card className="text-center">
        <Card.Header>WORLD CUP 2022</Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe A</Card.Header>
              <Card.Body>
                <Card.Title>Qatar</Card.Title>
                <Card.Text>
                  <img className="w-100" src={qatar} alt="qat" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe A</Card.Header>
              <Card.Body>
                <Card.Title>Équateur </Card.Title>
                <Card.Text>
                  <img className="w-100" src={equateur} alt="equa" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Button variant="primary" onClick={getRandomInt}>
            Who will win
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
