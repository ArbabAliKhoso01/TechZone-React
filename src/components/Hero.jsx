import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="bg-light py-5">

      <Container className="text-center">

        <h1 className="display-4 fw-bold">
          Welcome to TechZone
        </h1>

        <p className="lead">
          Discover the latest technology products at affordable prices.
        </p>

        <Button variant="primary" size="lg">
          Explore Products
        </Button>

      </Container>

    </section>
  );
}

export default Hero;