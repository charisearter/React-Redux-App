import React from 'react';
import './App.css';


import FoxForm from './components/FoxForm';
import FoxList from './components/FoxList';



function App() {
  return (
    <div className="App">
      <h1>Foxes</h1>

      <FoxForm />
      <FoxList />
    </div>
  );
}

export default App;
