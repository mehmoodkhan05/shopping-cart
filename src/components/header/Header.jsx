import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section className="header-section">
        <Navbar expand="lg" className="main-header">
          <Container>
            <Navbar.Brand href="/" className="secondary">
              Shopping Cart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/products" className="secondary">
                  Products
                </Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <Nav.Link href="/cart" className="bg-transparent border-0">
                  <FaCartPlus className="cart-icon secondary" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
