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
        <Button
          onClick={() => window.alert('UIIU')}
          >
            Alert
        </Button>
        <Input
          label='Street'
          placeholder='E.g.: 15h Avenue'
          value={street}
          onChange= {e => setStreet(e.target.value)}
          />
      </Container>
        
      </div>
    
  );
}

export default App;
