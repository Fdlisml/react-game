import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
   return (
      <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
            <Container fluid>
               <Navbar.Brand href="/">GameHolic</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                  <Nav>
                     <Nav.Link href="all-game">All GAME</Nav.Link>
                     <Nav.Link href="trending">TRENDING GAME</Nav.Link>
                     <Nav.Link href="best">BEST GAME</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
}

export default NavigationBar;
