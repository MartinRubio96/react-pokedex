import { useState, useEffect } from 'react'
import './App.css'
import { Footer } from './assets/Footer';
import { Header } from './assets/Header';
import { Main } from './assets/Main';

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
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App
