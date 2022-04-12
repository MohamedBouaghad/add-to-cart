import React from "react";
import Products from "../Data";
import Product from "./Product";


const Main = ({handleProducts}) => {
    return(
        <div className='main'>
            {
                Products.map(item => (
                    <Product props={item} handleProducts={handleProducts} />
                ))
            }
        </div>
    )
}

export default Main