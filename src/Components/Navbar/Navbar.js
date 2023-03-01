import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar_">
            <ul className="nav__itens">
                <img className="logo__icon" alt="logo" src={require("./logo.png")} />
                <div className="menu__itens">
                    <li className="nav_iten">home</li>
                    <li className="nav_iten">recommended</li>
                    <li className="nav_iten">lastest release</li>
                    <li className="nav_iten">favorite</li>
                    <li className="nav_iten">genre</li>
                </div>
                <div className="accout__info">
                    <i class="bi bi-search"></i>
                    <i class="bi bi-bell-fill"></i>
                    <i class="bi bi-person-fill"></i>
                </div>
            </ul>

        </div>
    )
}

export default Navbar;