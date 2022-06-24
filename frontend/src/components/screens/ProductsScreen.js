import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ProductsScreen = () => {
  const [pageCount, setPageCount] = useState(0);
  let productsLimit = 10;

  // Access restriction if no user
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
      const totalResults = data[0].totalResults;
      setPageCount(Math.ceil(totalResults / productsLimit));
    };
    fetchProducts();
  }, []);

  async function fetchLaptops(currentPage) {
    const res = await fetch(
      `/api/products?page=${currentPage}?offset=25&limit=${productsLimit}`
    );
    const data = await res.json();
    return data;
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const productsFormServer = await fetchLaptops(currentPage);
    setProducts(productsFormServer);
  };

  return (
    <>
      <h1>Trending Laptops</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
      />
    </>
  );
};

export default ProductsScreen;
