import React from "react";
import "./Home.css";

import image from "../img/fundo.png"

import Slicker from "./Slicker";

const Home = () => {
    return (
        <div className="home__page" style={{ backgroundImage: `url(${image})` }}>
            <div className="home__itens" >
                <h1 className="welcome_h1">feel the sensation of <br/> <span>cinema</span> in your  home</h1>
                <p className="welcome_p">wide selection of films with the best audio and visual quality</p>

                <div className="btns">
                <a href="/" className="bnt_1">join now</a>
                <a href="/" className="bnt_2">lern more</a>
                </div>

                <Slicker />
            </div>
           
        </div>
    )
}

export default Home;