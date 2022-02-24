/** @format */

import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export function MovieCollection() {
  const [MovieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://61eb17287ec58900177cdba8.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`https://61eb17287ec58900177cdba8.mockapi.io/movies/${id}`, {
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
                key={index}
                poster={movie.poster}
                name={movie.name}
                rating={movie.rating}
                summary={movie.summary}
                trailer={movie.trailer}
                id={movie.id}
                deleteMovie={
                  <IconButton
                    onClick={() => {
                      deleteMovie(movie.id);
                    }}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                editMovie={
                  <IconButton
                    onClick={() => {
                      history.push(`/movies/edit/${movie.id}`);
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
