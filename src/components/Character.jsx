import React, {useState} from "react";

function Character({ id, character, onCharClick }) {
    const { name, house, ancestry, image } = character;

    const handleClick = () => {
        onCharClick(character)
    }

    return (
        <div onClick={handleClick}>
            <div>
                <img src={image} alt={name} />
            </div>
            <div className="header">
                {name}
            </div>
            <div>
                {house}
            </div>
            <div>
                {ancestry}
            </div>
        </div>
    )
}

export default Character;