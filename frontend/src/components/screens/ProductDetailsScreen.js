import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import axios from 'axios';

const ProductDetailsScreen = () => {
  // Access restriction if no user
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [params.id]);
  console.log(product);
  return (
    <>
      <Link className="btn btn-light my-3" to="/products">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image width="450" src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
            <ListGroupItem>Price: {product.price}</ListGroupItem>
            <Button
              variant="outline-secondary"
              href={product.url}
              className="my-3"
              size="lg"
            >
              Buy From Ali Express
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailsScreen;
