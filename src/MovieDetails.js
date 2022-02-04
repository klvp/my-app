/** @format */

import { useParams } from "react-router-dom";

export function MovieDetails({ MovieList }) {
  const { movieId } = useParams();
  const movie = MovieList[movieId];
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h3>{movie.name}</h3>
          <p> ⭐ {movie.rating}</p>
        </div>
        <section>{movie.summary}</section>
      </div>
    </div>
  );
}
