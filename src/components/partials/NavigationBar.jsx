import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function NavigationBar() {
  const location = useLocation();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary d-flex justify-content-between"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} style={{ width: '50px' }} />
            GAMES
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/all-game" className={location.pathname === '/all-game' ? 'active' : ''}>All GAME</Nav.Link>
              <Nav.Link as={Link} to="/trending" className={location.pathname === '/trending' ? 'active' : ''}>TRENDING GAME</Nav.Link>
              <Nav.Link as={Link} to="/best" className={location.pathname === '/best' ? 'active' : ''}>BEST GAME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;