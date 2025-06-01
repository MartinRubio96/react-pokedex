import { useState, useEffect } from 'react'
import './PokemonCard.css'

export function PokemonCard({ pokemon }) {  
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(pokemon)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [pokemon])

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!data) {
        return (
            <div className='card'>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className='card'>
                <p><img src={data.sprites.front_default} /></p>
                <div className='cardFields'>
                    <p><b>ID:</b> {data.id}</p>
                    <p><b>Name:</b> {Capitalize(data.name)}</p>
                    <p><b>Height:</b> {data.height/10} m</p>
                    <p><b>Weight:</b> {data.weight/10} kg</p>
                </div>
            </div>
        )

    }
}