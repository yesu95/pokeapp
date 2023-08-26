import React from "react";
import "./styles.css";
import Principal from "./components/Principal";
import SearchBar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "./api";

const { useState, useEffect } = React;

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(25, 25 * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 25));
            setNotFound(false);
        } catch (err) { }
    };

    useEffect(() => {
        if (!searching) {
            fetchPokemons();
        }
    }, [page]);

    const onSearch = async (pokemon) => {
        if (!pokemon) {
            return fetchPokemons();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        let lowercasePokemon = pokemon.toLowerCase(); // Convertir a minúsculas
        const result = await searchPokemon(lowercasePokemon);
        if (!result) {
            setNotFound(true);
            setLoading(false);
            return;
        } else {
            setPokemons([result]);
            setPage(0);
            setTotal(1);
        }
        setLoading(false);
        setSearching(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Principal />
                <SearchBar onSearch={onSearch} />
                {notFound ? (
                    <div>
                        <h2 className="notfound-text">
                            Nombre del pokémon no encontrado.
                        </h2>
                    </div>
                ) : (
                    <Pokedex
                        loading={loading}
                        pokemons={pokemons}
                        page={page}
                        setPage={setPage}
                        total={total}
                    />
                )}
            </header>
        </div>
    );
}

export default App;
