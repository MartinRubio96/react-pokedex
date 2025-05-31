import { useState } from 'react'
import './PokemonCard.css'

export function PokemonCard({ resource }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(resource)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [])

    return (
        <div className='card'>
            <p>{data.name}</p>
        </div>
    )
}