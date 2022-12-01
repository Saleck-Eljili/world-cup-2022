import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import coreedusud from "./coreedusud.png";
import portugal from "./portugal.png";

import ghana from "./ghana.png";
import uruguay from "./uruguay.png";

import japon from "./japon.png";
import espagne from "./espagne.png";

import costarica from "./costarica.png";
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
      setCongrat("Félicitations! corée du sud");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
      setShow(true);
      setCongrat("Félicitations! portugal");
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
      setCongrat2("Félicitations! uruguay");
    }
    if (ran2 === 2) {
      setVariant4("Danger");
      setVariant3("Success");
      setShow2(true);
      setCongrat2("Félicitations! ghana");
    }
    if (ran2 === 0) {
      setVariant4("Light");
      setVariant3("Light");
      setCongrat2("ÉGALITÉ");
      setShow2(true);
    }

    let ran3 = Math.floor(Math.random() * 3);
    if (ran3 === 1) {
      setVariant5("Success");
      setVariant6("Danger");
      setShow3(true);
      setCongrat3("Félicitations! japon");
    }
    if (ran3 === 2) {
      setVariant6("Success");
      setVariant5("Danger");
      setShow3(true);
      setCongrat3("Félicitations! espagne");
    }
    if (ran3 === 0) {
      setVariant6("Light");
      setVariant5("Light");
      setCongrat3("ÉGALITÉ");
      setShow3(true);
    }

    let ran4 = Math.floor(Math.random() * 3);
    if (ran4 === 1) {
      setVariant7("Success");
      setVariant8("Danger");
      setShow4(true);
      setCongrat4("Félicitations! costa rica");
    }
    if (ran4 === 2) {
      setVariant8("Success");
      setVariant7("Danger");
      setShow4(true);
      setCongrat4("Félicitations! allemagne");
    }
    if (ran4 === 0) {
      setVariant8("Light");
      setVariant7("Light");
      setCongrat4("ÉGALITÉ");
      setShow4(true);
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
              <Card.Header>Groupe H</Card.Header>
              <Card.Body>
                <Card.Title>Corée du Sud</Card.Title>
                <Card.Text>
                  <img className="w-100" src={coreedusud} alt="coreedusud" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe H</Card.Header>
              <Card.Body>
                <Card.Title>Portugal</Card.Title>
                <Card.Text>
                  <img className="w-100" src={portugal} alt="portugal" />
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
              <Card.Header>Groupe H</Card.Header>
              <Card.Body>
                <Card.Title>Ghana</Card.Title>
                <Card.Text>
                  <img className="w-100" src={ghana} alt="ghana" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant4.toLowerCase()}
              text={variant4.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe H</Card.Header>
              <Card.Body>
                <Card.Title>Uruguay</Card.Title>
                <Card.Text>
                  <img className="w-100" src={uruguay} alt="uruguay" />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
        <hr />
        {/* {show3 && <Fireworks {...fxProps} />} */}
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
              <Card.Header>Groupe E</Card.Header>
              <Card.Body>
                <Card.Title>Japon</Card.Title>
                <Card.Text>
                  <img className="w-100" src={japon} alt="japon" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant6.toLowerCase()}
              text={variant6.toLowerCase() === "light" ? "dark" : "white"}
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
          </div>
        </Card.Body>

        <hr />
        {/* {show4 && <Fireworks {...fxProps} />} */}
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
                <Card.Title>Costa Rica</Card.Title>
                <Card.Text>
                  <img className="w-100" src={costarica} alt="costarica" />
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
            Qui va gagner
          </Button>
        </div>

        <Card.Footer className="text-muted">eljili©2022</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
