import React from "react"

const Footer=
()=> {
    return(
    <footer
        className="bg-dark text-white text-center mt-5 p-5" >
        &copy; {new Date().getFullYear()} 
    </footer>
    );
};

export  default Footer