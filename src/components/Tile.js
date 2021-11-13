import React, { useState } from "react";

function Tile(props) {
    const [showTile, setShowTile] = useState(true)

    function handleClick() {
        setShowTile(!showTile)
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <div className={showTile ? "pigTile" : "hideTile"}>
                <p>Specialty: {props.specialty}</p>
                <p>Weight: {props.weight}</p>
                <p>Greased: {props.greased ? "Greasy" : "Dry"}</p>
                <p>Highest Medal: {props.medal}</p>
            </div>
        </div>
    )
}

export default Tile;