import React, { useState } from "react";
import FilmList from "./FilmList";

import "semantic-ui-css/semantic.min.css";
import { Segment, Button } from "semantic-ui-react";

export default function StarWarsCharDisplay(props) {
  const [showFilms, setShowFilms] = useState(false);

  const showFilmsHandler = () => {
    setShowFilms(!showFilms);
  };

  return (
    <div className="StarWarsCharContainer">
      {props.starWarsChars.map(char => {
        return (
          <Segment.Group>
            <div key={char.name}>
              <Segment>
                <h3>{char.name}</h3>
              </Segment>
              <Segment>
                <p>{char.birth_year}</p>
              </Segment>
              <Button onClick={showFilmsHandler} color="blue">
                Show Films
              </Button>
              {showFilms ? <FilmList films={char.films} /> : null}
            </div>
          </Segment.Group>
        );
      })}
    </div>
  );
}
