import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navRes, setNavRes] = React.useState(false);
  const handleClick = () => {
    setNavRes(!navRes);
  };

  return (
    <>
      <div className={navRes ? "navbar_resposive" : "navbar_"}>
        <i class={navRes ? "bi bi-list" : "bi bi-x-lg"} onClick={() => handleClick()}></i>
        <ul className={navRes ? "nav__itens_resp" : "nav__itens"}>
          <img className="logo__icon" alt="logo" src={require("./logo.png")} />
          <div className="menu__itens">
            <li className="nav_iten">home</li>
            <li className="nav_iten">recommended</li>
            <li className="nav_iten">lastest release</li>
            <li className="nav_iten">favorite</li>
            <li className="nav_iten">genre</li>
          </div>
        </ul>

        <div className="accout__info">
          <i class="bi bi-search"></i>
          <i class="bi bi-bell-fill"></i>
          <i class="bi bi-person-fill"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
