/** @format */

import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import { MovieCollection } from "./MovieCollection";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App() {
  let history = useHistory();

  const [MovieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   fetch("https://61eb17287ec58900177cdba8.mockapi.io/movies")
  //     .then((data) => data.json())
  //     .then((mvs) => setMovieList(mvs));
  // }, []);

  const [theme, setTheme] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              {/* <Button color="inherit" onClick={() => history.push("/color")}>
                Color
              </Button> */}
              <Button
                color="inherit"
                onClick={() => history.push("/movies/add")}
              >
                Add Movie
              </Button>
              <Button
                sx={{ marginLeft: "auto" }}
                color="inherit"
                startIcon={
                  theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? "light" : "dark"}
                Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies/add">
              <AddMovie />
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetails />
            </Route>

            <Route path="/movies">
              <div>
                <MovieCollection />
              </div>
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/color"></Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function HomePage() {
  return (
    <div className="header">
      <h1>Welcome to Movies Home Page 🤷‍♂️✌✨</h1>
      <div className="home"></div>
      <p>You can Perform all CRUD Operations as mentioned below</p>
      <ul>
        <li>Add New Movie to the list</li>
        <li>Update Movie Details</li>
        <li>Read Movie Details</li>
        <li>Delete Movie Details</li>
      </ul>
    </div>
  );
}
