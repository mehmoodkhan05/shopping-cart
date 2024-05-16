import { Card, Col, Nav, Row } from "react-bootstrap";
import "./products.css";
import products from "../../data/Products";

const productsCard = () => {
  const specificproducts = products.filter(
    (el) =>
      el.id == 1 ||
      el.id == 2 ||
      el.id == 3
  );
  return (
    <>
      <Row className="justify-content-sm-center">
        {specificproducts.map((product) => {
          return (
            <Col lg={4} sm={6} key={product.id}>
              <Card className="card-item text-center border-0 align-items-center mt-5">
                <Card.Img
                  variant="top"
                  src={product.icon}
                  className="card-icon rd-50 w-50"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <div className="products_btn text-center">
          <Nav.Link href="/products" className="btn btn-w-228">
            view all products
          </Nav.Link>
        </div>
      </Row>
    </>
  );
};

export default productsCard;
