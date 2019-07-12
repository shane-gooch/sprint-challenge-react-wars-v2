import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Segment, Grid } from "semantic-ui-react";

import StarWarsCharDisplay from "./components/StarWarsCharDisplay";

function App() {
  const [starWarsChars, setstarWarsChars] = useState([]);
  const [nextPageState, setNextPageState] = useState({});
  const [prevPageState, setPrevPageState] = useState({});
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  useEffect(() => {
    const getStarWarsChars = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => {
          setstarWarsChars(res.data.results);
          setNextPageState(res.data.next);
        })
        .catch(err => console.log(err));
    };
    getStarWarsChars();
  }, []);
  useEffect(() => {
    const getNextPage = () => {
      axios
        .get(nextPageState)
        .then(res => {
          setstarWarsChars(res.data.results);
          setNextPageState(res.data.next);
          setPrevPageState(res.data.previous);
        })
        .catch(err => console.log(err));
    };
    getNextPage();
  }, [nextPage]);
  useEffect(() => {
    const getPrevPage = () => {
      axios
        .get(prevPageState)
        .then(res => {
          setstarWarsChars(res.data.results);
          setNextPageState(res.data.next);
          setPrevPageState(res.data.previous);
        })
        .catch(err => console.log(err));
    };
    getPrevPage();
  }, [prevPage]);

  const nextPageHandler = () => {
    setNextPage(!nextPage);
  };
  const prevPageHandler = () => {
    setPrevPage(!prevPage);
  };
  return (
    <div className="App">
      <h1>React Wars</h1>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Button color="blue" onClick={prevPageHandler} className="button">
            Previous
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color="blue" onClick={nextPageHandler} className="button">
            Next
          </Button>
        </Grid.Column>
      </Grid>
      <StarWarsCharDisplay starWarsChars={starWarsChars} />
    </div>
  );
}

export default App;
