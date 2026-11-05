import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">

      <Container className="text-center">

        <p>
          Copyright 2026 TechZone. All rights reserved.
        </p>

        <div>
          <a href="#" className="text-white mx-2">Privacy</a>

          <a href="#" className="text-white mx-2">Terms</a>

          <a href="#" className="text-white mx-2">Contact</a>
        </div>

      </Container>

    </footer>
  );
}

export default Footer;