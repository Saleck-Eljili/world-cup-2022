import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import iran from "./iran.png";
import england from "./england.png";

import senegal from "./senegal.png";
import netherlands from "./netherlands.png";

import usa from "./usa.png";
import wales from "./wales.png";

import { useState } from "react";
import { Fireworks } from "fireworks/lib/react";
import Alert from "react-bootstrap/Alert";

function App() {
  const [variant, setVariant] = useState("Info");
  const [variant2, setVariant2] = useState("Info");
  const [congrat, setCongrat] = useState("");
  const [show, setShow] = useState(false);

  const [variant3, setVariant3] = useState("Info");
  const [variant4, setVariant4] = useState("Info");
  const [congrat2, setCongrat2] = useState("");
  const [show2, setShow2] = useState(false);

  const [variant5, setVariant5] = useState("Info");
  const [variant6, setVariant6] = useState("Info");
  const [congrat3, setCongrat3] = useState("");
  const [show3, setShow3] = useState(false);

  const getRandomInt = () => {
    let ran = Math.floor(Math.random() * 3);
    if (ran === 1) {
      setVariant("Success");
      setVariant2("Danger");
      setShow(true);
      setCongrat("Congrats! ENGLAND");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
      setShow(true);
      setCongrat("Congrats! IRAN");
    }
    if (ran === 0) {
      setVariant2("Light");
      setVariant("Light");
      setCongrat("EQUALITY");
      setShow(true);
    }

    let ran2 = Math.floor(Math.random() * 3);
    if (ran2 === 1) {
      setVariant3("Danger");
      setVariant4("Success");
      setShow2(true);
      setCongrat2("Congrats! NETHERLANDS");
    }
    if (ran2 === 2) {
      setVariant4("Danger");
      setVariant3("Success");
      setShow2(true);
      setCongrat2("Congrats! SENEGAL");
    }
    if (ran2 === 0) {
      setVariant4("Light");
      setVariant3("Light");
      setCongrat2("EQUALITY");
      setShow2(true);
    }

    let ran3 = Math.floor(Math.random() * 3);
    if (ran3 === 1) {
      setVariant5("Success");
      setVariant6("Danger");
      setShow3(true);
      setCongrat3("Congrats! USA");
    }
    if (ran3 === 2) {
      setVariant6("Success");
      setVariant5("Danger");
      setShow3(true);
      setCongrat3("Congrats! WALES");
    }
    if (ran3 === 0) {
      setVariant6("Light");
      setVariant5("Light");
      setCongrat3("EQUALITY");
      setShow3(true);
    }
  };

  let fxProps = {
    count: 3,
    interval: 200,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  return (
    <div>
      <Card className="text-center">
        <Card.Header>WORLD CUP 2022</Card.Header>
        {show && <Fireworks {...fxProps} />}
        {show && (
          <div className="d-flex justify-content-center">
            <Alert
              className="d-flex justify-content-center"
              show={show}
              variant="success"
              style={{
                zIndex: 999,
                maxWidth: 700,
              }}
            >
              <h1>{congrat}</h1>
            </Alert>
          </div>
        )}
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe B</Card.Header>
              <Card.Body>
                <Card.Title>England</Card.Title>
                <Card.Text>
                  <img className="w-100" src={england} alt="england" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe B</Card.Header>
              <Card.Body>
                <Card.Title>Iran </Card.Title>
                <Card.Text>
                  <img className="w-100" src={iran} alt="iran" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <hr />
        {show2 && <Fireworks {...fxProps} />}
        {show2 && (
          <div className="d-flex justify-content-center">
            <Alert
              className="d-flex justify-content-center"
              show={show2}
              variant="success"
              style={{
                zIndex: 999,
                maxWidth: 700,
              }}
            >
              <h1>{congrat2}</h1>
            </Alert>
          </div>
        )}
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant3.toLowerCase()}
              text={variant3.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe A</Card.Header>
              <Card.Body>
                <Card.Title>Senegal</Card.Title>
                <Card.Text>
                  <img className="w-100" src={senegal} alt="senegal" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant4.toLowerCase()}
              text={variant4.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe A</Card.Header>
              <Card.Body>
                <Card.Title>Netherlands </Card.Title>
                <Card.Text>
                  <img className="w-100" src={netherlands} alt="netherlands" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <hr />
        {show3 && <Fireworks {...fxProps} />}
        {show3 && (
          <div className="d-flex justify-content-center">
            <Alert
              className="d-flex justify-content-center"
              show={show3}
              variant="success"
              style={{
                zIndex: 999,
                maxWidth: 700,
              }}
            >
              <h1>{congrat3}</h1>
            </Alert>
          </div>
        )}
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant5.toLowerCase()}
              text={variant5.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe B</Card.Header>
              <Card.Body>
                <Card.Title>Usa</Card.Title>
                <Card.Text>
                  <img className="w-100" src={usa} alt="usa" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant6.toLowerCase()}
              text={variant6.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe B</Card.Header>
              <Card.Body>
                <Card.Title>Wales </Card.Title>
                <Card.Text>
                  <img className="w-100" src={wales} alt="wales" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-center">
          <Button
            className="w-25 mb-3"
            variant="primary"
            onClick={getRandomInt}
          >
            Who will win
          </Button>
        </div>

        <Card.Footer className="text-muted">eljili©2022</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
