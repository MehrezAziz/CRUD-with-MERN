//import logo from './logo.svg';

import React from "react";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import RoutesConfig from "./RoutesConfig";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
       <RoutesConfig/>
       
      </div>
      <Footer />
    </div>
  );
};

export default App;
