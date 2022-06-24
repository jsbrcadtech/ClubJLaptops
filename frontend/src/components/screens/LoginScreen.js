import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import Loading from '../Loading';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/products');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="heading my-3">
        <h1>SIGN IN</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control my-3"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block my-3">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginScreen;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const submissionHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: { 'Content-type': 'application/json' },
//       };
//       setLoading(true);
//       const { data } = await axios.post(
//         '/api/users/login',
//         {
//           email,
//           password,
//         },
//         config
//       );
//       setLoading(false);
//       localStorage.setItem('userDetails', JSON.stringify(data));
//     } catch (error) {
//       setError(error.response.data.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <Row>
//       <Col md={3}></Col>
//       <Col md={4}>
//         <h1>SIGN IN</h1>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {loading && <Loading />}
//         <Form onSubmit={submissionHandler}>
//           <Form.Group controlId="formBasicEmail" className="my-3">
//             <Form.Label className="my-3">Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             ></Form.Control>
//           </Form.Group>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>
//           <Button className="my-3" variant="primary" type="submit">
//             Sign in
//           </Button>
//         </Form>
//       </Col>
//     </Row>
//   );
// export default LoginScreen;

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const submissionHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: { 'Content-type': 'application/json' },
//       };
//       setLoading(true);
//       const { data } = await axios.post(
//         '/api/users/login',
//         {
//           email,
//           password,
//         },
//         config
//       );
//       setLoading(false);
//       localStorage.setItem('userDetails', JSON.stringify(data));
//     } catch (error) {
//       setError(error.response.data.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <Row>
//       <Col md={3}></Col>
//       <Col md={4}>
//         <h1>SIGN IN</h1>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {loading && <Loading />}
//         <Form onSubmit={submissionHandler}>
//           <Form.Group controlId="formBasicEmail" className="my-3">
//             <Form.Label className="my-3">Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             ></Form.Control>
//           </Form.Group>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>
//           <Button className="my-3" variant="primary" type="submit">
//             Sign in
//           </Button>
//         </Form>
//       </Col>
//     </Row>
//   );
// };
