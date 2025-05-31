import './PokemonCard.css'

export function PokemonCard({name}) {
    return (
        <div className='card'>
            <p>{name}</p>
        </div>
    )
}