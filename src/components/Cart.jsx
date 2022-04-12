import React, {useState, useEffect} from "react";


const Cart = ({CartItems, setCartItems, handleChange}) => {

    const [price, setPrice] = useState(0)

    const handleRemove = (id) =>{
        const arr = CartItems.filter((item) => item.id !== id);
        setCartItems(arr)
        handlePrice()
    }


    const handlePrice = () => {
        let prc = 0;
        CartItems.map((item) => (prc+=item.quantity * item.price))
        setPrice(prc)
    }

    useEffect(()=>{
        handlePrice()
    })


    return(
        <div className='cartPage'>
            {
                CartItems.length === 0 ? <div className='emptyCart'>Your Cart is Empty</div> : 
                <div className='productsCart'> 
                    {
                        CartItems.map((item) => (
                            <div className="cart_box" key={item.id}>
                                <div className="cart_img">
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                </div>
                                <div className='btns'>
                                    <button className='btn' onClick={() => handleChange(item, 1)}>+</button>
                                    <button className='amount'>{item.quantity}</button>
                                    <button className='btn' onClick={() => handleChange(item, -1)}>-</button>
                                </div>
                                <div className='remove'>
                                    <span>price : {item.price} DH </span>
                                    <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                    <div className='check'>
                        <div className="total">
                            <span>Total Price of your Cart : </span>
                            <span className='prc'> {price} DH</span>
                        </div>
                    </div>
                </div>
                }
        </div>
    )
}

export default Cart