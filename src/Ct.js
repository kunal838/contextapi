import React, { useContext } from "react";
import { moviecontext } from "./DataContext";
import './Ct.css'
const Ct = () => {
    const [movies, setMovies] = useContext(moviecontext);
  return (
    <div className="ct">
        
       
      {movies.map((movie) => (
             <h1 className="h" >{movie.name}{movie.price}</h1>
      )
       
      )}
    </div>
  );
};

export default Ct;
