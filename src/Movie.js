/** @format */

import { useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function Movie({
  poster,
  name,
  rating,
  summary,
  trailer,
  id,
  deleteMovie,
  editMovie,
}) {
  const styles = { color: rating >= 7.5 ? "green" : "red" };
  const [show, setshow] = useState(false);
  const history = useHistory();
  // const summarystyles = { display: show ? "block" : "none" };

  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />

      <div className="movie-content">
        <div className="movie-specs">
          <h3 className="movie-title">
            {name}
            <IconButton
              onClick={() => {
                setshow(!show);
              }}
              color="primary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => {
                history.push(`/movies/${id}`);
              }}
              color="primary"
            >
              <InfoIcon />
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">
            ⭐ {rating}
          </p>
        </div>
        <CardContent>
          {/* <div className="movie-summary" style={summarystyles}>
            {summary}
          </div> */}
          {!show ? <div className="movie-summary">{summary}</div> : ""}
        </CardContent>
        <div className="options">
          <Counter />{" "}
          <div>
            {editMovie} {deleteMovie}
          </div>
        </div>
      </div>
      {/* <details>
              <summary>Summary of {name}</summary>
              <p>{summary}</p>
            </details> */}

      {/* conditional styling */}

      {/* <div className="movie-summary" style={summarystyles}>
        {summary}
      </div> */}

      {/* conditional rendering */}

      {/* {!show ? <div className="movie-summary">{summary}</div> : ""} */}

      {/* <Counter /> */}
    </Card>
  );
}
