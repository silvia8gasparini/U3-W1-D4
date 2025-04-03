import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <Spinner animation="border" role="status" variant="dark" />
      <span className="mt-2 text-dark">Caricamento...</span>
    </div>
  );
};

export default Loading;
