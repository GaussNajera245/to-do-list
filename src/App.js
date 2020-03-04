import React from 'react';
import BoxClass from './components/BoxClass';
import './App.css';
import Header from './components/Header'
import BoxFunction from "./components/BoxFunction"

function App() {
  return (
    <div className="App">
      <Header title='Tasks to do:' />
        <br></br>
      <BoxFunction />
    </div>
  );
}

export default App;
