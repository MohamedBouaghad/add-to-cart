import React from "react";

const Product = ({props, handleProducts}) => {
    return(
        <div className='product' key={props.id}>
            <h1>{props.name}</h1>
            <img src={props.img} />
            <h2>{props.price} DH</h2>
            <button className='add' onClick={() =>handleProducts(props)}>Add to Cart</button>
        </div>
    )
}

export default Product