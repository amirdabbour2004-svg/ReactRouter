import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product= () => {
    return(
        <>
        <input type="text" placeholder="Search Products..."/>
        <nav>
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New</Link>
        </nav>
        <Outlet/> 
        </>
    )
};
export default Product;
