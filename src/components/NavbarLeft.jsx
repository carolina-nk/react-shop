import React from 'react';
import ImgLogo from "@icons/logo_yard_sale.svg";

const NavbarLeft = () => {
    return (
        <div className="navbar-left">
            <img src={ImgLogo} alt="logo" />
            <ul>
                <li><a href="/">All</a></li>
                <li><a href="/">Clothes</a></li>
                <li><a href="/">Electtronics</a></li>
                <li><a href="/">Furniture</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Others</a></li>
            </ul>
        </div>
    )
}

export default NavbarLeft