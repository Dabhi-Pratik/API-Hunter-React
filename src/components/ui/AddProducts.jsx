import { Form, Button, Col, Row } from "react-bootstrap";
import * as formik from "formik";
import { addProduct } from "../../api/productAxiousFetch";
import productValidationSchema from "../../validation/productValidationSchema";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { Formik } = formik;

  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={productValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await addProduct(values);

          alert("Product Added Successfully!");

          resetForm();
          navigate("/");
        } catch (err) {
          alert(err.message);
        }
      }}
      initialValues={{
        name: "",
        description: "",
        price: "",
        category: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Product Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
              />

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Category</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={touched.category && !!errors.category}
              />

              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter product description"
              name="description"
              value={values.description}
              onChange={handleChange}
              isInvalid={touched.description && !!errors.description}
            />

            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>

            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="price"
              value={values.price}
              onChange={handleChange}
              isInvalid={touched.price && !!errors.price}
            />

            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Add Product</Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddProduct;
