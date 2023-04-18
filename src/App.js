import './index.css';
import './App.css';
import imageRickMorty from './img/rick-morty.png';
import credential from './img/credencial-aldotr.jpg';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const[characters, setCharacters] = useState(null);
  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json(); 
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick y Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ):(
          <>
          <img src={imageRickMorty} alt="Rick y Morty" className='img-home' />
          <button onClick={reqApi} className="btn-search">
          Buscar personajes
           </button>
          </>
        )
        }

        <div className="character-credential">
        <div>
          <img src={credential} alt="Credential" className="img-credential"/>
        </div>
        <div>
          <p>
            <h5 className="texto_credencial">Aldo Torres Ramírez</h5>
          </p>
          <p>
            <h6 className="texto_credencial">zS20006781</h6>
          </p>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;