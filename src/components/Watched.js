import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Visti</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Elemento" : "Elementi"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Non hai nulla nella lista, aggiungi qualcosa <i className="far fa-frown no-movies"></i></h2>
        )}
        
      </div>
    </div>
  );
};
