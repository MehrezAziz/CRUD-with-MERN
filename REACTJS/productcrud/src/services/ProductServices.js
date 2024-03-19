import axios from "axios";
const API_URL= "http://localhost:5000/api/products" ;//ou mehrez:5000

const ProductService=
{
    getAllProducts: ()           => axios.get(`${API_URL}`),
    getProductById: (id)         => axios.get( `${API_URL}/${id}`),
    addProduct    : (product)    => axios.post(`${API_URL}`,product),
    updateProduct : (id,product) => axios.put(`${API_URL}/${id}`,product),
    deleteProduct : (id)         => axios.delete(`${API_URL}/${id}`),
    exportsv      : ()           => axios.get(`${API_URL}/export/exportcsv`,{ responseType: "blob" ,})
};

export default ProductService ;



