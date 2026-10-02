import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { deleteProduct } from "../../api/productAxiousFetch";

const ProductList = ({ product, index }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteProduct(product._id);

      alert("Product Deleted Successfully!");

      window.location.reload();
    } catch (error) {
      console.error("Delete Error:", error.message);
      alert(error.message);
    }
  };

  const handleEdit = () => {
    navigate("/editProduct", {
      state: product,
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>

      <td>{product.name}</td>

      <td>{product.description}</td>

      <td>{product.price}</td>

      <td>{product.category}</td>

      <td>
        <Button
          variant="warning"
          size="sm"
          className="me-2"
          onClick={handleEdit}
        >
          Edit
        </Button>

        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductList;
