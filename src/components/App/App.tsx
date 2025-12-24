import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container/Container';


function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
        <Button
          onClick={() => window.alert('UIIU')}
          >
            Alert
        </Button>
      </Container>
        
      </div>
    
  );
}

export default App;
