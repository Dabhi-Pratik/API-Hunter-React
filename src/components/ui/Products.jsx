import React, { useEffect, useState } from "react";
import { Alert, Spinner, Table } from "react-bootstrap";

import { getProducts } from "../../api/productAxiousFetch";
import ProductList from "./ProductList";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadData() {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProductData(data);

      if (!data) {
        setError("Something went wrong");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="m-3">
        <h5>{error}</h5>
      </Alert>
    );
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {productData.map((product, index) => (
          <ProductList
            product={product}
            key={product._id || product.id}
            index={index}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Products;
