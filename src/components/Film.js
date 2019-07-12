import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Film(props) {
  const sliceURLEndpoint = props.film.slice(27, 28);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const getFilms = () => {
      axios
        .get(`https://swapi.co/api/films/${sliceURLEndpoint}/`)
        .then(res => {
          setFilm(res.data);
        })
        .catch(err => console.log(err));
    };
    getFilms();
  }, []);
  return (
    <div className="filmsContainer">
      <strong>{film.title}</strong>
      <p>{film.opening_crawl}</p>
    </div>
  );
}
