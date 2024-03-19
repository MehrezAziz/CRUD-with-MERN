import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewProduct from "./services/ViewProduct";
import AddProduct from "./components/commons/product/AddProduct";
import ListProduct from "./components/commons/product/ListProduct";

const RoutesConfig = ()=>
{
    return (
         <Router>
            <Routes>
                <Route path="/view/:id" element={<ViewProduct/>}></Route>
                <Route exact path="/" element={<ListProduct />} />
                <Route path="/add" element={<AddProduct/>}></Route>
            </Routes>
         </Router>

    );
};


export default RoutesConfig ;







