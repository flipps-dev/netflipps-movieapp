import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <h1 id="logo">Netflipps</h1>
          </div>
          <ul className="nav-links">
            <li id="li-toWatch">
              <Link to="/" id="btn-toWatch" className="btn btn-secondary">
                Da Vedere
              </Link>
            </li>

            <li id="li-seen">
              <Link to="/watched" id="btn-seen" className="btn btn-secondary">
                Visti
              </Link>
            </li>

            <li id="li-add">
              <Link to="/add" id="btn-add" className="btn btn-main">
                <span>Aggiungi </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
