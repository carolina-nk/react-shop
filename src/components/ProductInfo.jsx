import React from 'react';
import ImgAddToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
  return (
    <div className="product-info">
            <p>$120,00</p>
            <p>Bike</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat adipisci sapiente nesciunt, facilis ipsum deleniti repudiandae impedit aliquid repellendus laboriosam deserunt perspiciatis, molestias provident! Ipsa impedit maxime consequatur voluptatum iusto.</p>
            <button className="primary-button add-to-cart-button">
                <img src={ImgAddToCart} alt="add to cart" />
                Add to cart
            </button>
    </div>
  )
}

export default ProductInfo