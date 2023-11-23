import { Container, Navbar, Nav  } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">GameHolic</Navbar.Brand>
            <Nav>
                <Nav.Link href="/trending">TRENDING GAME</Nav.Link>
                <Nav.Link href="/best">BEST GAME</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
