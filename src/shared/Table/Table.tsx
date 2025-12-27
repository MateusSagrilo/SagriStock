import React from 'react'
import './Table.scss'
import Products from './Table.mockdata'

const headers = [
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price'},
  {key: 'stock', value: 'Available Stock'}
]
const Table = () => {
  return <table className='AppTable'>
    <thead>
      <tr>
        {
          headers.map(header => <th key={header.key}>{header.value}</th>)
        }
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cookie</td>
        <td>$1.25</td>
        <td className='right'>23</td>
      </tr>
      <tr>
        <td>Milk 1L</td>
        <td>$0.99</td>
        <td className='right'>10</td>
      </tr>
    </tbody>
  </table>
}

export default Table