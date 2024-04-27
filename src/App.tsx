import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MappedTable, topCars} from "./components/mappedtable/MappedTable";

function App() {
  return (
    <div className="App">
      <MappedTable cars={topCars}/>
    </div>
  );
}

export default App;
