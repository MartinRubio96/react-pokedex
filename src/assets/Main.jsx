import './Main.css'
import { useState, useEffect } from 'react'


export function Main() {
    const [data, setData] = useState(null);

    function clickProcess() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }

    return (
        <div className='mainBox'>
            <div className='searchBox'>
                <input className='searchBar' type="text" placeholder='Name of a pokemon...'/>
                <button className='searchButton' onClick={clickProcess}>Search</button>
            </div>
            <div className='pokemonCard'>
                <p>ID:</p>
                <p>Name:</p>
                <p>Type:</p>
                <p>Image:</p>
            </div>
        </div>
    )
}