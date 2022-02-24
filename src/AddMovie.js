/** @format */

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function AddMovie() {
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
          onClick={() => {
            const newMovie = {
              name: Name,
              poster: Poster,
              rating: Rating,
              summary: Summary,
              trailer: Trailer,
            };

            fetch("https://61eb17287ec58900177cdba8.mockapi.io/movies", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newMovie),
            }).then(() => history.push("/movies"));
            // setMovieList([...MovieList, newMovie]);
          }}
          variant="outlined"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
