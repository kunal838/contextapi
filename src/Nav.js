import './Nav.css'
import React, { useContext } from "react";
import { moviecontext } from "./DataContext";

const Nav = () => {
  const [movies, setMovies] = useContext(moviecontext);
  
  return (
    <div className="nav">
      <h1>Nav</h1>
      <div className="nav__content">
        <h2>movies:  </h2> <h3>{  movies.length}</h3>
      </div>
    </div>
  );
};

export default Nav;
