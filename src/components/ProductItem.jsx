//import React, { useState } from 'react';
import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import ImgCart from "@icons/bt_add_to_cart.svg"

const ProductItem = ({ product }) => {
  //const [cart, setCart] = useState([]);
  const { addToCart } = useContext(AppContext);
  /*const handleClick = () => {
    setCart([]);
  }*/
  const handleClick = item => {
    addToCart(item);
  }
  return (
    <div className="cards-container">
      <div className="product-card">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)} >
            <img src={ImgCart} alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ProductItem