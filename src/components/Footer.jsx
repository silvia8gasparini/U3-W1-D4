import { Container } from "react-bootstrap";

const MyFooter = () => (
  <footer className="bg-dark text-light py-3 mt-5">
    <Container className="text-center">
      <p>
        &copy; {new Date().getFullYear()} Il Labirinto degli Spiriti. All rights
        reserved.
      </p>
    </Container>
  </footer>
);

export default MyFooter;
