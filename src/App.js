import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import equateur from "./equateur.jpg";
import qatar from "./qatar.png";

function App() {
  const variant = "Info";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
      <Card className="text-center">
        <Card.Header>WORLD CUP 2022</Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-center justify-content-between mx-5 my-4">
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Groupe A</Card.Header>
              <Card.Body>
                <Card.Title>Qatar</Card.Title>
                <Card.Text>
                  <img className="w-100" src={qatar} alt="qatar" />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
