import './Main.css'
import { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard';
import { SearchBox } from './SearchBox';


export function Main() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10/')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [])

    if (!data) {
        return (
            <div className='mainBox'>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className='mainBox'>
                <div className='gallery'>
                    <PokemonCard pokemon={data.results[0].url}/>
                    <PokemonCard pokemon={data.results[1].url}/>
                    <PokemonCard pokemon={data.results[2].url}/>
                </div>
            </div>
        )
    }
}