import React from 'react';
import "./cart.scss"
const cartLogo = window.location.origin +'/images/cart.svg';
function Cart() {
    let cartClick = () => {
        alert();
    }
    return ( 
        <div className="cart-container" onClick={()=>cartClick()}>
            <img className="cart-logo" src={cartLogo} alt="cart"/>
            <div className="cart-text">Cart</div>
            <div className="cart-count">0</div>
        </div>
     );
}

export default Cart;