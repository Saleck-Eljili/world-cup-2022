import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import saouditearabie from "./saouditearabie.png";
import argentina from "./argentina.jpg";

import denmark from "./denmark.png";
import tunisia from "./tunisia.jpg";

import mexico from "./mexico.png";
import poland from "./poland.png";

import france from "./france.jpg";
import australia from "./australia.jpg";

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
      setCongrat("Congrats! ARGENTINA");
    }
    if (ran === 2) {
      setVariant2("Success");
      setVariant("Danger");
      setShow(true);
      setCongrat("Congrats! SAUDI ARABIA");
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
      setCongrat2("Congrats! TUNISIA");
    }
    if (ran2 === 2) {
      setVariant4("Danger");
      setVariant3("Success");
      setShow2(true);
      setCongrat2("Congrats! DENMARK");
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
      setCongrat3("Congrats! MEXICO");
    }
    if (ran3 === 2) {
      setVariant6("Success");
      setVariant5("Danger");
      setShow3(true);
      setCongrat3("Congrats! POLAND");
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
      setCongrat4("Congrats! FRANCE");
    }
    if (ran4 === 2) {
      setVariant8("Success");
      setVariant7("Danger");
      setShow4(true);
      setCongrat4("Congrats! AUSTRALIA");
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
              <Card.Header>Groupe C</Card.Header>
              <Card.Body>
                <Card.Title>Argentina</Card.Title>
                <Card.Text>
                  <img className="w-100" src={argentina} alt="argentina" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant2.toLowerCase()}
              text={variant2.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe C</Card.Header>
              <Card.Body>
                <Card.Title>Saudi arabia</Card.Title>
                <Card.Text>
                  <img
                    className="w-100"
                    src={saouditearabie}
                    alt="saouditearabie"
                  />
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
              <Card.Header>Groupe D</Card.Header>
              <Card.Body>
                <Card.Title>Denmark</Card.Title>
                <Card.Text>
                  <img className="w-100" src={denmark} alt="denmark" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant4.toLowerCase()}
              text={variant4.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe D</Card.Header>
              <Card.Body>
                <Card.Title>Tunisia</Card.Title>
                <Card.Text>
                  <img className="w-100" src={tunisia} alt="tunisia" />
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
              <Card.Header>Groupe C</Card.Header>
              <Card.Body>
                <Card.Title>Mexico</Card.Title>
                <Card.Text>
                  <img className="w-100" src={mexico} alt="mexico" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant6.toLowerCase()}
              text={variant6.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe C</Card.Header>
              <Card.Body>
                <Card.Title>Poland</Card.Title>
                <Card.Text>
                  <img className="w-100" src={poland} alt="poland" />
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
              <Card.Header>Groupe D</Card.Header>
              <Card.Body>
                <Card.Title>France</Card.Title>
                <Card.Text>
                  <img className="w-100" src={france} alt="france" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant8.toLowerCase()}
              text={variant8.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe D</Card.Header>
              <Card.Body>
                <Card.Title>Australia</Card.Title>
                <Card.Text>
                  <img className="w-100" src={australia} alt="australia" />
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
