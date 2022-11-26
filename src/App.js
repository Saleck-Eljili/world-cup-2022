import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import japon from "./japon.png";
import costarica from "./costarica.png";

import belgique from "./belgique.png";
import maroc from "./maroc.png";

import croatie from "./croatie.png";
import canada from "./canada.png";

import espagne from "./espagne.png";
import allemagne from "./allemagne.png";

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

  const [variant7, setVariant7] = useState("Info");
  const [variant8, setVariant8] = useState("Info");
  const [congrat4, setCongrat4] = useState("");
  const [show4, setShow4] = useState(false);

  const getRandomInt = () => {
    let ran = Math.floor(Math.random() * 3);
    if (ran === 1) {
      setVariant("Success");
      setVariant2("Danger");
      setShow(true);
      setCongrat("Congrats! japon");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
      setShow(true);
      setCongrat("Congrats! costa rica");
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
      setCongrat2("Congrats! maroc");
    }
    if (ran2 === 2) {
      setVariant4("Danger");
      setVariant3("Success");
      setShow2(true);
      setCongrat2("Congrats! belgique");
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
      setCongrat3("Congrats! croatie");
    }
    if (ran3 === 2) {
      setVariant6("Success");
      setVariant5("Danger");
      setShow3(true);
      setCongrat3("Congrats! canada");
    }
    if (ran3 === 0) {
      setVariant6("Light");
      setVariant5("Light");
      setCongrat3("EQUALITY");
      setShow3(true);
    }

    let ran4 = Math.floor(Math.random() * 3);
    if (ran4 === 1) {
      setVariant7("Success");
      setVariant8("Danger");
      setShow4(true);
      setCongrat4("Congrats! espagne");
    }
    if (ran4 === 2) {
      setVariant8("Success");
      setVariant7("Danger");
      setShow4(true);
      setCongrat4("Congrats! allemagne");
    }
    if (ran4 === 0) {
      setVariant8("Light");
      setVariant7("Light");
      setCongrat4("EQUALITY");
      setShow4(true);
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
              <Card.Header>Groupe E</Card.Header>
              <Card.Body>
                <Card.Title>Japon</Card.Title>
                <Card.Text>
                  <img className="w-100" src={japon} alt="japon" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe E</Card.Header>
              <Card.Body>
                <Card.Title>Costa rica</Card.Title>
                <Card.Text>
                  <img className="w-100" src={costarica} alt="costarica" />
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
              <Card.Header>Groupe F</Card.Header>
              <Card.Body>
                <Card.Title>Belgique</Card.Title>
                <Card.Text>
                  <img className="w-100" src={belgique} alt="belgique" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant4.toLowerCase()}
              text={variant4.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe F</Card.Header>
              <Card.Body>
                <Card.Title>Maroc</Card.Title>
                <Card.Text>
                  <img className="w-100" src={maroc} alt="maroc" />
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
              <Card.Header>Groupe F</Card.Header>
              <Card.Body>
                <Card.Title>Croatie</Card.Title>
                <Card.Text>
                  <img className="w-100" src={croatie} alt="croatie" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant6.toLowerCase()}
              text={variant6.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe F</Card.Header>
              <Card.Body>
                <Card.Title>Canada</Card.Title>
                <Card.Text>
                  <img className="w-100" src={canada} alt="canada" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>

        <hr />
        {show4 && <Fireworks {...fxProps} />}
        {show4 && (
          <div className="d-flex justify-content-center">
            <Alert
              className="d-flex justify-content-center"
              show={show4}
              variant="success"
              style={{
                zIndex: 999,
                maxWidth: 700,
              }}
            >
              <h1>{congrat4}</h1>
            </Alert>
          </div>
        )}
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant7.toLowerCase()}
              text={variant7.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe E</Card.Header>
              <Card.Body>
                <Card.Title>Espagne</Card.Title>
                <Card.Text>
                  <img className="w-100" src={espagne} alt="espagne" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant8.toLowerCase()}
              text={variant8.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe E</Card.Header>
              <Card.Body>
                <Card.Title>Allemagne</Card.Title>
                <Card.Text>
                  <img className="w-100" src={allemagne} alt="allemagne" />
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
            Who will win
          </Button>
        </div>

        <Card.Footer className="text-muted">eljili©2022</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
