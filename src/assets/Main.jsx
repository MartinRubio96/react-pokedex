import './Main.css'
import { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard';
import { SearchBox } from './SearchBox';
import { RigthArrow } from './RightArrow';
import { LeftArrow } from './LeftArrow';

export function Main() {
    const [data, setData] = useState(null);
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [])

    function requestData(newOffset) {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + newOffset)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }

    function rightClick() {
        if (offset < 1300){
            requestData(offset + 10);
            setOffset(offset + 10);
        }
    }

    function leftClick() {
        if (offset > 0) {
            requestData(offset - 10);
            setOffset(offset - 10);
        }
    }

    if (!data) {
        return (
            <div className='mainBox'>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className='mainBox'>
                <SearchBox />
                <div className='galleryBox' >
                    <LeftArrow handleClick={leftClick} />
                    <div className='gallery'>
                        {data.results.map((resource) => (
                            <PokemonCard pokemon={resource.url} />
                        ))}
                    </div>
                    <RigthArrow handleClick={rightClick} />
                </div>
            </div>
        )
    }
}