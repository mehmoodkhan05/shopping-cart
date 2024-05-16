import { Col, Container, Row } from "react-bootstrap"
import "./hero.css"

const Hero = () => {
  return (
    <>
        <section className="hero-section">
          <Container>
            <Row>
              <Col className="text-center">
                <h1>Product1</h1>
              </Col>
              <Col className="text-center">
                <h1>Product2</h1>
              </Col>
              <Col className="text-center">
                <h1>Product3</h1>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Hero