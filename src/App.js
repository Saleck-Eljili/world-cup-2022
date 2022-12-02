import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import paysbas from "./paysbas.png";
import etatsunis from "./etatsunis.png";

import argentine from "./argentine.jpg";
import australie from "./australie.jpg";

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

  const getRandomInt = () => {
    let ran = Math.floor(Math.random() * 3);
    if (ran === 1) {
      setVariant("Success");
      setVariant2("Danger");
      setShow(true);
      setCongrat("Félicitations! pays-bas");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
      setShow(true);
      setCongrat("Félicitations! etats-unis");
    }
    if (ran === 0) {
      setVariant2("Light");
      setVariant("Light");
      setCongrat("ÉGALITÉ");
      setShow(true);
    }

    let ran2 = Math.floor(Math.random() * 3);
    if (ran2 === 1) {
      setVariant3("Danger");
      setVariant4("Success");
      setShow2(true);
      setCongrat2("Félicitations! australie");
    }
    if (ran2 === 2) {
      setVariant4("Danger");
      setVariant3("Success");
      setShow2(true);
      setCongrat2("Félicitations! argentine");
    }
    if (ran2 === 0) {
      setVariant4("Light");
      setVariant3("Light");
      setCongrat2("ÉGALITÉ");
      setShow2(true);
    }
  };

  let fxProps = {
    count: 3,
    interval: 30,
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
        <Card.Header className="d-flex justify-content-center">
          <img style={{ width: 60 }} src={logo} alt="logo" />
          <h1>COUPE DU MONDE de la FIFA 2022</h1>
        </Card.Header>
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
              <Card.Header>1/8 de finale</Card.Header>
              <Card.Body>
                <Card.Title>Pays-Bas</Card.Title>
                <Card.Text>
                  <img className="w-100" src={paysbas} alt="paysbas" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>1/8 de finale</Card.Header>
              <Card.Body>
                <Card.Title>Etats-Unis</Card.Title>
                <Card.Text>
                  <img className="w-100" src={etatsunis} alt="etatsunis" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <hr />
        {/* {show2 && <Fireworks {...fxProps} />} */}
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
              <Card.Header>2/8 de finale</Card.Header>
              <Card.Body>
                <Card.Title>Argentine</Card.Title>
                <Card.Text>
                  <img className="w-100" src={argentine} alt="argentine" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant4.toLowerCase()}
              text={variant4.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>2/8 de finale</Card.Header>
              <Card.Body>
                <Card.Title>Australie</Card.Title>
                <Card.Text>
                  <img className="w-100" src={australie} alt="australie" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>

        <div className="d-flex justify-content-center">
          <Button
            className="wm-100 mb-3"
            variant="primary"
            onClick={getRandomInt}
          >
            Qui va gagner
          </Button>
        </div>

        <Card.Footer className="text-muted">eljili©2022</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
