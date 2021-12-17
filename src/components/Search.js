import React, { useState } from "react";
import { SearchResult } from "./SearchResult";

export const Search = () => {
  
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    const URL_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=b91fd3bca472e98a57f91748abdafe02&language=it-IT&page=1&include_adult=false&query=${e.target.value}`;

    const URL_TV = `https://api.themoviedb.org/3/search/tv?api_key=b91fd3bca472e98a57f91748abdafe02&language=it-IT&page=1&include_adult=false&query=${e.target.value}`;
   
    fetch(URL_MOVIE)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        return fetch(URL_TV);
      }).then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });


  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Cerca qualcosa di bello"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <SearchResult movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
