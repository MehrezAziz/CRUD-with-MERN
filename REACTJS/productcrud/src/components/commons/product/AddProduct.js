import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductServices from "../../../services/ProductServices"

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", price: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Perform real-time validation and update errors
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = {...errors };

    if (fieldName === "name") {
      if (value.trim() === "") {
        newErrors.name = "Name is required";
      } else {
        delete newErrors.name; // Clear the error if it's valid
      }
    }

    if (fieldName === "price") {
      if (value.trim() === "") {
        newErrors.price = "Price is required";
      } else if (isNaN(value) || parseFloat(value) <= 0) {
        newErrors.price = "Price must be a valid number greater than 0";
      } else {
        delete newErrors.price; // Clear the error if it's valid
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
        ProductServices.addProduct(formData)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    } else {
      console.log("Form has validation errors. Please fix them.");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.price.trim() === "") {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Price must be a valid number greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            required
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price}</div>
          )}
        </div>
        <br />
        <button type="submit" className="btn btn-success mr-2">
          <i className="fa fa-check-circle" aria-hidden="true"></i> Save
        </button>
        &nbsp;&nbsp;
        <Link to="/" className="btn btn-secondary">
          <i className="fa fa-ban" aria-hidden="true"></i> Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddProduct;