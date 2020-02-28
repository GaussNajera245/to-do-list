import React from 'react';
import Mcard from './components/Card';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
          <Header title='Tasks to do:' />
        <br></br>
      <Mcard />
    </div>
  );
}

export default App;
