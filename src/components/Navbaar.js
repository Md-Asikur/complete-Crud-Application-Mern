import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbaar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/register" className="text-white">
             Register
            </Nav.Link>
            <Nav.Link href="/details" className="text-white">
             Details
            </Nav.Link>
          
            <NavDropdown className="text-white" title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="text-dark">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-dark">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="text-dark">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-white">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;