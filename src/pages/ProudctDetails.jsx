import React from 'react';
import ProductInfo from "@components/ProductInfo";
import "@styles/productDetails.scss";

const ProudctDetails = () => {
  return (
    <aside className="product-details">
        <img src="@icons/icon_close.png" alt="close" />
        <img src="@images/boh.jpeg" alt="boh" />
        <div className="points">
            <li className="active"></li>
            <li></li>
            <li></li>
          </div>
        <ProductInfo />
    </aside>
  )
}

export default ProudctDetails