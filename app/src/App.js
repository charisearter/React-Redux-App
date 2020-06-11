import React from 'react';
import './App.css';

import FoxForm from './components/FoxForm';
import FoxList from './components/FoxList';

function App() {
  return (
    <div className="App all-center">
      <h1>Cute Floofy Foxes </h1>
      <FoxForm />
      <FoxList />
    </div>
  );
}

export default App;
