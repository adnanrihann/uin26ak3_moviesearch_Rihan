import { Link } from 'react-router-dom';

function MovieCard(props) {
  let bildeUrl = props.film.Poster;
  
  if (bildeUrl === "N/A") {
    bildeUrl = "https://via.placeholder.com/200x300?text=Mangler+bilde";
  }

  return (
    <li style={{ width: '200px', marginBottom: '10px' }}>
      <article>
        <img src={bildeUrl} alt={props.film.Title} style={{ width: '200px', height: '300px', objectFit: 'cover' }}/>
        <h3>{props.film.Title}</h3>
        <p>År: {props.film.Year}</p>
        <Link to={'/' + props.film.Title}>Les mer</Link>
      </article>
    </li>
  );
}

export default MovieCard;