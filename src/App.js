/** @format */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default function App() {
  let movies = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
  ];
  const [Name, setName] = useState();
  const [Poster, setPoster] = useState();
  const [Rating, setRating] = useState();
  const [Summary, setSummary] = useState();
  const [MovieList, setMovieList] = useState([...movies]);

  return (
    <div className="App">
      <form action="" className="form">
        <div className="form-group">
          <TextField
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            required
            color="secondary"
          />
          {/* <input type="text" placeholder="" /> */}
        </div>
        <div className="form-group">
          <TextField
            onChange={(event) => {
              setPoster(event.target.value);
            }}
            id="outlined-basic"
            label="Poster"
            variant="outlined"
          />
          {/* <input type="text" placeholder="poster url" /> */}
        </div>
        <div className="form-group">
          <TextField
            onChange={(event) => {
              setRating(event.target.value);
            }}
            id="outlined-basic"
            label="Rating"
            variant="outlined"
          />
          {/* <input type="text" placeholder="movie rating" /> */}
        </div>
        <div className="form-group">
          <TextField
            onChange={(event) => {
              setSummary(event.target.value);
            }}
            id="outlined-basic"
            label="Summary"
            variant="outlined"
          />
          {/* <input type="text" placeholder="movie  summary" /> */}
        </div>
        {/* <button></button> */}
        <Button
          onClick={(event) => {
            event.preventDefault();
            console.log(event);

            setMovieList([
              ...MovieList,
              {
                name: Name,
                poster: Poster,
                rating: Rating,
                summary: Summary,
              },
            ]);
          }}
          variant="outlined"
        >
          Add Movie
        </Button>
      </form>

      <section className="gallery">
        {MovieList.map((movie) => {
          return (
            <Movie
              poster={movie.poster}
              name={movie.name}
              rating={movie.rating}
              summary={movie.summary}
            />
          );
        })}
      </section>
      {/* <Movie /> */}
    </div>
  );
}

function Movie({ poster, name, rating, summary }) {
  const styles = { color: rating >= 8.5 ? "green" : "red" };
  const [summaryDisplay, setsummaryDisplay] = useState(true);
  const [summarystyles, setsummarystyles] = useState({
    display: "none",
  });
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-title">{name}</h3>
        <p style={styles} className="movie-rating">
          ⭐ {rating}
        </p>
      </div>
      {/* <details>
        <summary>Summary of {name}</summary>
        <p>{summary}</p>
      </details> */}
      {/* <button
        onClick={() => {
          setsummarystyles({ display: summaryDisplay ? "block" : "none" });
          setsummaryDisplay(summaryDisplay ? false : true);
        }}
      >
        Toggle Summary
      </button> */}

      {/* <FormControlLabel
        control={<Android12Switch />}
        label="Android 12"
        onChange={() => {
          setsummarystyles({ display: summaryDisplay ? "block" : "none" });
          setsummaryDisplay(summaryDisplay ? false : true);
        }}
      /> */}
      <FormGroup
        onChange={() => {
          setsummarystyles({ display: summaryDisplay ? "block" : "none" });
          setsummaryDisplay(summaryDisplay ? false : true);
        }}
        class="toggle-align"
      >
        <FormControlLabel
          labelPlacement="start"
          control={<Switch />}
          label="Show Summary"
        />
      </FormGroup>
      <div className="movie-summary" style={summarystyles}>
        {summary}
      </div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function AddMovie() {
  return (
    <div>
      {/* <form action="" className="form">
        <div className="form-group">
          <label htmlFor="">Movie : </label>
          <input type="text" placeholder="movie name" />
        </div>
        <div className="form-group">
          <label htmlFor="">Poster URL :</label>
          <input type="text" placeholder="poster url" />
        </div>
        <div className="form-group">
          <label htmlFor="">Rating :</label>
          <input type="text" placeholder="movie rating" />
        </div>
        <div className="form-group">
          <label htmlFor="">Summary :</label>
          <input type="text" placeholder="movie  summary" />
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
}
