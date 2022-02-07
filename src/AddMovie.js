/** @format */

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function AddMovie({ MovieList, setMovieList }) {
  const [Name, setName] = useState();
  const [Poster, setPoster] = useState();
  const [Rating, setRating] = useState();
  const [Summary, setSummary] = useState();
  const [Trailer, setTrailer] = useState();
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
        />
        <TextField
          onChange={(event) => {
            setPoster(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Poster"
          variant="outlined"
        />
        <TextField
          onChange={(event) => {
            setRating(event.target.value);
          }}
          id="outlined-basic"
          label="IMDB Rating"
          variant="outlined"
        />
        <TextField
          onChange={(event) => {
            setSummary(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Summary"
          variant="outlined"
        />
        <TextField
          onChange={(event) => {
            setTrailer(event.target.value);
          }}
          id="outlined-basic"
          label="Movie Trailer"
          variant="outlined"
        />
      </form>
      <div className="align-button">
        <Button
          onClick={(event) => {
            event.preventDefault();
            setMovieList([
              ...MovieList,
              {
                name: Name,
                poster: Poster,
                rating: Rating,
                summary: Summary,
              },
            ]);
            history.push("/movies");
          }}
          variant="outlined"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
