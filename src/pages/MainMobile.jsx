import React from 'react';
import "@styles/mainMobile.scss";

const Main2 = () => {
  return (
    <div className="mobile-main">
        <ul>
            <h1>CATEGORIES</h1>
            <li><a href="/">All</a></li>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Electonics</a></li>
            <li><a href="/">Furnitures</a></li>
            <li><a href="/">Toys</a></li>
            <li><a href="/">Others</a></li>
        </ul>
        <ul>
            <li><a href="/">My orders</a></li>
            <li><a href="/">My account</a></li>
        </ul>
        <ul>
            <li><a href="/" className="email" >carolinank@example.com</a></li>
            <li><a href="/" className="sign-out" >Sign out</a></li>
        </ul>
    </div>
  )
}

export default Main2