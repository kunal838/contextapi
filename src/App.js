import React from "react";
import "./App.css";
import { MovieProvider } from "./DataContext";
import Nav from './Nav.js'
import Ct from './Ct.js'
import AddMovie from './AddMovie'

const App = () => {
  return (
    <MovieProvider>
      <Nav/>
      <Ct/>
      <AddMovie/>
    </MovieProvider>
  );
};

export default App;
