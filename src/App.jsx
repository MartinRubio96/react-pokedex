import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </>
  );
}

export default App
