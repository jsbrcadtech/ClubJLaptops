import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainScreen = () => {
  return (
    <Container>
      <Row>
        <div className="intro-text my-3">
          <div className="my-3">
            <h1 className="title">Welcome to CLUB J Laptops</h1>
            <p className="subtitle">Your new laptop in just a few clicks</p>
          </div>
          <Link className="btn btn-light my-3" to="/login">
            Sign
          </Link>
          <Link className="btn btn-light my-3" to="/register">
            Sign-up
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default MainScreen;
