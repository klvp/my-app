/** @format */

import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export function MovieCollection({ MovieList, setMovieList }) {
  const history = useHistory();
  return (
    <div>
      <section className="gallery">
        {MovieList.map((movie, index) => {
          return (
            <div>
              <Movie
                key={index}
                poster={movie.poster}
                name={movie.name}
                rating={movie.rating}
                summary={movie.summary}
                trailer={movie.trailer}
                id={index}
                deleteMovie={
                  <IconButton
                    onClick={() => {
                      const remainingMovies = MovieList.filter(
                        (mv, idx) => idx !== index
                      );

                      setMovieList(remainingMovies);
                    }}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                editMovie={
                  <IconButton
                    onClick={() => {
                      history.push(`/movies/edit/${index}`);
                    }}
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                }
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
