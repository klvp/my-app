/** @format */

import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./global";
export function MovieCollection() {
  const [MovieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(() => {
    getMovies();
  }, []);
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const history = useHistory();
  return (
    <div>
      <section className="gallery">
        {MovieList.map((movie, index) => {
          return (
            <div>
              <Movie
                key={movie._id}
                poster={movie.poster}
                name={movie.name}
                rating={movie.rating}
                summary={movie.summary}
                trailer={movie.trailer}
                id={movie._id}
                deleteMovie={
                  <IconButton
                    onClick={() => {
                      deleteMovie(movie._id);
                    }}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                editMovie={
                  <IconButton
                    onClick={() => {
                      history.push(`/movies/edit/${movie._id}`);
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
