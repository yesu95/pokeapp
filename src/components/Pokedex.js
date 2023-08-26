import React from "react";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, 6 - 1);
        setPage(nextPage);
    };

    return (
        <div>
            <div className="header-pokedex">
                <Pagination
                    page={page + 1}
                    totalPages={6}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {loading ? (
                <div>
                    <h2 className="loading-text">Cargando pokemons...</h2>
                </div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, idx) => {
                        return (
                            <PokeCard pokemon={pokemon} key={pokemon.name} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Pokedex;
