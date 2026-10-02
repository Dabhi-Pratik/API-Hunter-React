import * as yup from "yup";

function productValidationSchema() {
  return yup.object().shape({
    name: yup
      .string()
      .min(2, "Minimum 2 characters are required")
      .max(100, "Maximum 100 characters only")
      .required("Product name is required"),

    description: yup
      .string()
      .min(10, "Minimum 10 characters are required")
      .max(500, "Maximum 500 characters only")
      .required("Description is required"),

    price: yup
      .number()
      .typeError("Price must be a number")
      .positive("Price must be greater than 0")
      .required("Price is required"),

    category: yup
      .string()
      .min(2, "Minimum 2 characters are required")
      .max(50, "Maximum 50 characters only")
      .required("Category is required"),
  });
}

export default productValidationSchema;
