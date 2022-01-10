/** @format */

import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";

export default function App() {
  let movies = [
    {
      name: "Money Heist",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
      rating: 7.8,
      summary:
        "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police",
    },

    {
      name: "The 100",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
      rating: 7.6,
      summary:
        "A nuclear conflict has decimated civilisation. A century later, a spaceship accommodating humanity's lone survivors dispatch 100 juvenile delinquents back to the Earth to determine its habitability.",
    },
    {
      name: "Stranger Things",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
      rating: 8.7,
      summary:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    },
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
      name: "NoCountry for OldMen",
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
        <TextField
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />

        <TextField
          onChange={(event) => {
            setPoster(event.target.value);
          }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
        />

        <TextField
          onChange={(event) => {
            setRating(event.target.value);
          }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
        />

        <TextField
          onChange={(event) => {
            setSummary(event.target.value);
          }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
        />
      </form>
      <div className="align-button">
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
      </div>

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
