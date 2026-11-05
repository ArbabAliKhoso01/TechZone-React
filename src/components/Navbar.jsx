import {
  Navbar as BootstrapNavbar,
  Nav,
  Container
} from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>

        <BootstrapNavbar.Brand href="#">
          TechZone
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>

          </Nav>
        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;