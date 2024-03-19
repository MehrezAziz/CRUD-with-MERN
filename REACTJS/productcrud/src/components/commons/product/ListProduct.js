
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductServices";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  //const newLocal =
  ProductService.getAllProducts()
    .then((response) => {
      setProducts(response.data.result);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  const handleDelete = (id) =>{
    //confirmation
    const confirmDelete = window.confirm("r u sure you wanna delete this product?");
    if(confirmDelete){
      ProductService.deleteProduct(id)
      .then( ()=>{
        //remove the delete product from the state
        setProducts(products.filter((product)=>product.id !== id));
      })
      .catch( (er) => {
        console.error(("Error deleting product:",er))
      }
      );
    }
  }
  return (
    <div>
      <h1>Product List</h1>
      <div className="row">
        <div className="col-md-9">
          <Link to="/add" className="btn btn-primary mb-3">
            Add Product
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <Link to={`/view/${product._id}`} className="btn btn-info mr-2">
                  <i class="fa fa-eye" aria-hidden="true"></i> View
                </Link>
                &nbsp;&nbsp;
                <Link to={`/edit/${product._id}`} className="btn btn-warning">
                  <i class="fa fa-pencil-square" aria-hidden="true"></i> Edit
                </Link>
                &nbsp;&nbsp;
                <Link
                onClick={()=>handleDelete(product._id)}
                className="btn btn-danger"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;