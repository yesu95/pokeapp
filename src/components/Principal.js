import React from "react";
import Logo from "../img/principal.png";

const Principal = () => {
    return (
        <>
            <section className="section principal">
                <div>
                    <img src={Logo} alt="Pokédex" className="App-logo" />
                    <h2>Gotta find 'em all!</h2>
                </div>
                <div></div>
            </section>
        </>
    );
};

export default Principal;
