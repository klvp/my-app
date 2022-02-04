/** @format */

import { Movie } from "./Movie";

export function MovieCollection({ MovieList }) {
  return (
    <div>
      <section className="gallery">
        {MovieList.map((movie, index) => {
          return (
            <Movie
              key={index}
              poster={movie.poster}
              name={movie.name}
              rating={movie.rating}
              summary={movie.summary}
              trailer={movie.trailer}
              id={index}
            />
          );
        })}
      </section>
    </div>
  );
}
