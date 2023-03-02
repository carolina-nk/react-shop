import React from 'react';
import NavbarLeft from "@components/NavbarLeft";
import NavbarRight from "@components/NavbarRight";
import ImgMenu from "@icons/icon_menu.svg";
import "@styles/header.scss";

const Header = () => {
    
    return (
        <nav>
            <img src={ImgMenu} alt="main" className="main" />
            <NavbarLeft />
            <NavbarRight />
        </nav>
    )
}

export default Header