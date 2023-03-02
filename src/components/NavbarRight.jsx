import React, { useState, useContext } from 'react';
import SignOut from "@pages/SignOut";
import ShoppingCart from "@pages/ShoppingCart";
import AppContext from "../context/AppContext";
import ImgShoppinCart from "@icons/icon_shopping_cart.svg";

const NavbarRight = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setTogglrOrders] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="navbar-right">
            <p className="navbar-email" onClick={handleToggle}>carolinank@example.com</p>
            <div className="navbar-shopping-cart" onClick={() => setTogglrOrders(!toggleOrders)}>
                <img src={ImgShoppinCart} alt="navbar-shopping-cart" />
                {state.cart.length > 0 ? <p className="cont">{state.cart.length}</p> : null }
            </div>
            {toggle && <SignOut />}
            {toggleOrders && <ShoppingCart />}
        </div>
    )
}

export default NavbarRight