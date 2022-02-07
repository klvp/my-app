/** @format */

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom";

export function EditMovie({ MovieList, setMovieList }) {
  const { id } = useParams();
  const movie = MovieList[id];
  console.log(movie.name);
  let [Name, setName] = useState(movie.name);
  let [Poster, setPoster] = useState(movie.poster);
  let [Rating, setRating] = useState(movie.rating);
  let [Summary, setSummary] = useState(movie.summary);
  let [Trailer, setTrailer] = useState(movie.trailer);
  let history = useHistory();

  return (
    <div>
      <form action="" className="form">
        <TextField
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Title"
          variant="outlined"
          value={Name}
        />
        <TextField
          onChange={(event) => {
            setPoster(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Poster"
          variant="outlined"
          value={Poster}
        />
        <TextField
          onChange={(event) => {
            setRating(event.target.value);
          }}
          id="outlined-basic"
          label="IMDB Rating"
          variant="outlined"
          value={Rating}
        />
        <TextField
          onChange={(event) => {
            setSummary(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Summary"
          variant="outlined"
          value={Summary}
        />
        <TextField
          onChange={(event) => {
            setTrailer(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Trailer"
          variant="outlined"
          value={Trailer}
        />
      </form>
      <div className="align-button">
        <Button
          onClick={(event) => {
            event.preventDefault();
            const updatedMovie = {
              name: Name,
              poster: Poster,
              rating: Rating,
              summary: Summary,
              trailer: Trailer,
            };
            const copyMovieList = [...MovieList];
            copyMovieList[id] = updatedMovie;
            setMovieList(copyMovieList);
            history.push("/movies");
          }}
          variant="outlined"
          color="success"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
