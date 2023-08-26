import React from "react";

const PokeCard = (props) => {
    const { pokemon } = props;
    return (
        <div className="pkm-card">
            <div className="pkm-img">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pkm-img"
                />
            </div>
            <div className="pkm-data">
                <div className="pkm-id">#{pokemon.id}</div>
                <div>
                    <h3 className="pkm-name">{pokemon.name}</h3>
                </div>
                <div className="pkm-types">
                    {pokemon.types.map((type) => (
                        <span key={type.type.name} className={type.type.name}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokeCard;
