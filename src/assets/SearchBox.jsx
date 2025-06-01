import './SearchBox.css'
import { useState } from 'react'

export function SearchBox() {
    return (
        // make change offset of the url from the value of this input
        // make new request

        <div className='searchBox'>
                <input className='searchBar' type="text" placeholder='Search pokemon by id...'/>
                <button className='searchButton'>Search</button>
        </div>
    )
}