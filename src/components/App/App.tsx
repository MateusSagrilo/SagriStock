import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';


function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <div className='Container'>
        <Button content="Click me"/>
      </div>
    </div>
  );
}

export default App;
