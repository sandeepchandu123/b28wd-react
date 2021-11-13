import { Movie } from "./Movie";

export function Movielist({ movies }) {
  ;
  return (
    <section className="movie-list">

      {movies.map(({ name, rating, summery, poster }) => (
        <Movie name={name}
          rating={rating}
          summery={summery}
          poster={poster} />
      ))}
    </section>
  );
}
