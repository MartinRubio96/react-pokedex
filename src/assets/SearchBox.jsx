import './SearchBox.css'

export function SearchBox() {
    return (
        <div className='searchBox'>
                <input className='searchBar' type="text" placeholder='Search pokemon by name...'/>
                <button className='searchButton'>Search</button>
        </div>
    )
}