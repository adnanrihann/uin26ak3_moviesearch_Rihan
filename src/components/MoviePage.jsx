import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function MoviePage() {
  const { movie } = useParams();
  const [filmData, setFilmData] = useState(null);

  useEffect(function() {
    async function hentEnFilm() {
      let svar = await fetch('https://www.omdbapi.com/?t=' + movie + '&apikey=f462a265');
      let data = await svar.json();
      setFilmData(data);
    }
    
    hentEnFilm();
  }, [movie]);

  if (filmData === null) {
    return (
      <main>
        <p>Laster...</p>
      </main>
    );
  }

  let bildeUrl = filmData.Poster;
  if (bildeUrl === "N/A") {
    bildeUrl = "https://via.placeholder.com/300x450?text=Mangler+bilde";
  }

  return (
    <main>
      <nav>
        <Link to="/">Gå tilbake</Link>
      </nav>

      <article>
        <h2>{filmData.Title}</h2>
        <img src={bildeUrl} alt={filmData.Title} width="300" />
        <p>Utgitt: {filmData.Year}</p>
        <p>Sjanger: {filmData.Genre}</p>
        <p>Regissør: {filmData.Director}</p>
        <p>Skuespillere: {filmData.Actors}</p>
        <p>Handling: {filmData.Plot}</p>
        <p>IMDB: {filmData.imdbRating}</p>
      </article>
    </main>
  );
}

export default MoviePage;