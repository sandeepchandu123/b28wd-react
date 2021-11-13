import { useState } from 'react';
import { Counter } from './Counter';






export function Movie({ name, rating, summery, poster }) {
  const [show, setshow] = useState(true);
  const styles = { color: rating < 8 ? "crimson" : "green", fontWeight: "bold" };
  const summeryStyles = {
    display: show ? "block" : "none",
  };

  return (<div className="movie-container">
    <img src={poster}
      alt={name}
      className="movie-poster" />
    <div className="movie-speces">
      <h3 className="movie-name">{name}</h3>
      <p className="movie-rating" style={styles}> ⭐{rating}</p>
    </div>
    <button onClick={() => setshow(!show)} className="movie-show-button">{show ? "Hide" : "Show"} description</button>

    {show ? <p className="movie-summery" style={summeryStyles}>{summery}</p> : ""}
    <Counter />
  </div>
  );
}
