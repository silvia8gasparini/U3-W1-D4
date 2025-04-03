import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavbar = function (props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
    >
      <Container fluid={true}>
        <Navbar.Brand href="#home">Il Labirinto degli Spiriti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
