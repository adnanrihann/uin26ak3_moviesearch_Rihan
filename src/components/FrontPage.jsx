import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function FrontPage() {
  const [filmer, setFilmer] = useState([]);
  const [sokeord, setSokeord] = useState('');

  useEffect(function() {
    async function startFilmer() {
      let svar = await fetch('https://www.omdbapi.com/?s=james+bond&type=movie&apikey=f462a265');
      let data = await svar.json();
      if (data.Search) {
        setFilmer(data.Search);
      }
    }
    startFilmer();
  }, []);

  async function handterSok(event) {
    let tekst = event.target.value;
    setSokeord(tekst);

    if (tekst.length >= 3) {
      let svar = await fetch('https://www.omdbapi.com/?s=' + tekst + '&type=movie&apikey=f462a265');
      let data = await svar.json();
      
      if (data.Search) {
        setFilmer(data.Search);
      } else {
        setFilmer([]);
      }
    } 
    
    if (tekst.length < 3) {
      let svar2 = await fetch('https://www.omdbapi.com/?s=james+bond&type=movie&apikey=f462a265');
      let data2 = await svar2.json();
      if (data2.Search) {
        setFilmer(data2.Search);
      }
    }
  }

  let overskrift = "James Bond filmer";
  if (sokeord.length >= 3) {
    overskrift = "Søkeresultater";
  }

  let listeMedFilmer = [];
  if (filmer.length > 0) {
    listeMedFilmer = filmer.map(function(enFilm) {
      return <MovieCard key={enFilm.imdbID} film={enFilm} />;
    });
  } else {
    listeMedFilmer = <li>Fant ingen filmer</li>;
  }

  return (
    <main>
      <header>
        <h1>Filmsøk</h1>
      </header>
      
      <section>
        <label>Søk etter film: </label>
        <input 
          type="text" 
          value={sokeord} 
          onChange={handterSok} 
        />
      </section>

      <section>
        <h2>{overskrift}</h2>
        <ul style={{display: 'flex', flexWrap: 'wrap', gap: '20px', listStyle: 'none', padding: 0 }}>
          {listeMedFilmer}
        </ul>
      </section>
    </main>
  );
}

export default FrontPage;