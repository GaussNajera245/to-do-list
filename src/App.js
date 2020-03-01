import React from 'react';
import Box from './components/Box';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header title='Tasks to do:' />
        <br></br>
      <Box />
    </div>
  );
}

export default App;
