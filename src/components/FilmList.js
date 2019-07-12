import React from "react";
import Film from "./Film";

export default function FilmList(props) {
  return (
    <div className="FilmList">
      {props.films.map(film => {
        return (
          <div key={film}>
            <Film film={film} />
          </div>
        );
      })}
    </div>
  );
}
