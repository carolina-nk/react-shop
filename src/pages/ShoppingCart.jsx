import React, { useContext } from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import AppContext from "../context/AppContext";
import "@styles/shoppingCart.scss";

const ShoppingCart = () => {
    const { state } = useContext(AppContext);

    const sumAll = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum  = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="container-fluid">
            <aside className="container">
                <div className="tittle-container">
                    <img src="@icons/flechita.svg" alt="" />
                    <p className="tittle">Shopping cart</p>
                </div>
                {state.cart.map((product,index) => (
                    <ShoppingCartItem
                        indexValue={index}
                        key={index}
                        product={product}
                    />
                ))}
                
                <div className="all-shopping-cart">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumAll()}</p>
                </div>
                <button className="primary-button">Checkout</button>
            </aside>
        </div>
    )
}

export default ShoppingCart