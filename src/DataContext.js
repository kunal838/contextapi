import { useState, createContext } from "react";

export const moviecontext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "HIi",
      price: "Rs-200",
      id: 1,
    },
    {
      name: "Loki",
      price: "Rs-1000",
      id: 2,
    },
    {
      name: " KGF ",
      price: "Rs-1000",
      id: 3,
    },
  ]);
  return (
    <moviecontext.Provider value={[movies , setMovies]}>
        {children}
    </moviecontext.Provider>
  );
};
