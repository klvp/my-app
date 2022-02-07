/** @format */

import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useHistory } from "react-router-dom";

export function MovieDetails({ MovieList }) {
  const { movieId } = useParams();
  const movie = MovieList[movieId];
  const history = useHistory();
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
        <Button
          onClick={() => {
            history.goBack();
          }}
          variant="outlined"
          startIcon={<ChevronLeftIcon />}
          className="go-back"
        >
          Back
        </Button>
        <div className="clear"></div>
      </div>
    </div>
  );
}
