import React, { useState } from "react";

import Tile from "./Tile";

function HogTiles({ hogs }) {
    const [filterGreased, setFilterGreased] = useState(false)
    const [sortByName, setSortByName] = useState(false)


    const hogsList = hogs.map((hog) => {
        return (
            <Tile 
                key={hog.image}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        )
    })

    const sortedHogsList = hogs.sort((hog) => {
        hog.name.sort()
        return (
            <Tile 
                key={hog.image}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        )
    })


    function handleGreased() {
        setFilterGreased(!filterGreased)
    }

    function handleSort() {
        setSortByName(!sortByName)
        console.log(sortedHogsList)
    }
        return (
            <div>
                <button onClick={handleGreased}>{filterGreased ? "Unfilter Greased" : "Filter Greased"}</button>
                <button onClick={handleSort}>{sortByName ? "Unsort by Name" : "Sort by Name"}</button>
                {filterGreased ? hogsList.filter((hog) => hog.props.greased) : hogsList}
                {sortByName ? hogsList.sort((hog) => hog.props.name) : hogsList}
            </div>
        )
}

export default HogTiles;