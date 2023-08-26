import React from "react";
import Lupa from "../img/lupa.svg";

// Usamos useState es un hook y lo usamos para hacer cambios en el estado del DOM
const { useState } = React;

const SearchBar = (props) => {
    // El array va a ser igual a lo que le ecribamos por useState. serach (index0) va a ser la variable que se va actualizando y el setSerach(index1) va a ser la función que lo cambie
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    };

    const onClick = async (e) => {
        e.preventDefault();
        onSearch(search);
    };

    return (
        <>
            <form action="">
                <label className="label-search">
                    <input
                        className="btn-search"
                        type="text"
                        placeholder="Buscar pokémon..."
                        onChange={onChange}
                    />
                    <button className="btn-find" onClick={onClick}>
                        <img src={Lupa} alt="Buscar" className="lupa" />
                    </button>
                </label>
            </form>
            <div className="data-pokemon"></div>
        </>
    );
};

export default SearchBar;
