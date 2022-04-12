import React from "react";
import { Link } from 'react-router-dom';


const Navbar = ({size}) => {
    return(
        <nav>
            <div className='container'>
                <Link to='/home' className="logo">Ecom<span>App</span></Link>
                <Link to='/cart' className="cart">
                    <span><ion-icon name="cart-outline"></ion-icon></span>
                    <p>{size}</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar