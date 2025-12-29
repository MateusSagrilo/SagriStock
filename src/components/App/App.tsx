import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, {TableHeader} from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';


const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  return (
   <div className="App">
      <Header title="SagriStock" />
      <Container>
        <Table
          headers={headers}
          data={Products}
        />

        <Form title='Product Form' >
          <Input
            label='Name'
            placeholder='E.g.: Cookie'/>
          <Input
            label='Price'
            type='number'
            step='0.01'
            min='0'
            placeholder='E.g.: $2.00'/>
          <Input
            label='Stock'
            type='number'
            min='0'
            placeholder='E.g.: 10'/>
        </Form>
        <Button>
          Submite
        </Button>
      </Container>
    </div>
  );
}

export default App;