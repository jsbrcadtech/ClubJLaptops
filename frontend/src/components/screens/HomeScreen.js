import { Container, Row } from 'react-bootstrap';

const MainScreen = () => {
  return (
    <Container>
      <Row>
        <div className="intro-text my-3">
          <div className="my-3">
            <h1 className="title">Welcome to CLUB J Laptops</h1>
            <p className="subtitle">Your new laptop in just a few clicks</p>
          </div>
        </div>
        <img
          src="https://ae04.alicdn.com/kf/Sfed334f18d134e2da1452da1dbfec217a.png"
          className="img-fluid shadow-2-strong"
          alt=""
          style={{ maxWidth: '24rem' }}
        />{' '}
        <img
          src="https://ae04.alicdn.com/kf/Hd45d5fce3d1748879beb6e050010fed4T.jpg"
          className="img-fluid shadow-2-strong"
          alt=""
          style={{ maxWidth: '24rem' }}
        />{' '}
        <img
          src="https://ae04.alicdn.com/kf/H115a91e31d174d9495ca19be9c3f1038q.jpg"
          className="img-fluid shadow-2-strong"
          alt=""
          style={{ maxWidth: '24rem' }}
        />
      </Row>
    </Container>
  );
};

export default MainScreen;
