import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container/Container';
import Input from '../../shared/Input';


function App() {

  const [street, setStreet] =useState('')
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
        <ul>
        {
          ['Mateus', 'Marcela', 'Sandra'].map((name, index) => {
            return <li key={index}>
              {name}
            </li>
          })
        }
        </ul>
      </Container>
        
      </div>
    
  );
}

export default App;
