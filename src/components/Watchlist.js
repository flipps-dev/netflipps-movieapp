import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Da Vedere</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Elemento" : "Elementi"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Non hai nulla nella lista, aggiungi qualcosa <i className="far fa-frown no-movies"></i></h2>
        )}
        
      </div>
    </div>
  );
};
