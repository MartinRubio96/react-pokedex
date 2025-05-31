import './Main.css'
import { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard';


export function Main() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [])

    return (
        <div className='mainBox'>
            <div className='searchBox'>
                <input className='searchBar' type="text" placeholder='Search pokemon by name...'/>
                <button className='searchButton'>Search</button>
            </div>
            <div className='gallery'>
                {data.results.map((pokemon) => (
                    <PokemonCard name={pokemon.name} />
                ))}
            </div>
        </div>
    )
}