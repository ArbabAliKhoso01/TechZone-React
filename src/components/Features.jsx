import { Container, Card, Row, Col } from "react-bootstrap";

function Features() {
  return (
    <Container className="py-5">

      <h2 className="text-center mb-4">
        Our Features
      </h2>

      <Row>

        <Col md={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Quality Products</Card.Title>

              <Card.Text>
                We provide high-quality technology products.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Affordable Prices</Card.Title>

              <Card.Text>
                Get your favorite products at reasonable prices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Fast Delivery</Card.Title>

              <Card.Text>
                Enjoy fast and reliable product delivery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Features;