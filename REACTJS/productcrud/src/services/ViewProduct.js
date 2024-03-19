import React, { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductServices from "./ProductServices";


const ViewProduct = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect( ()=>{
        ProductServices.getProductById(id)
        .then( (response) =>{
            setProduct(response.data.result);
        })
        .catch((err)=> {
            console.error("view error",err);
        }
        );
    }, [id] );
    return (
        <div>
            <h1>View Product</h1>
            { product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <Link to="/" className="btn btn-primary">Back to List</Link>
                </div>
            ) : (
                <p>Loading..</p>
            )}
            
        </div>
    );
};


export default ViewProduct;