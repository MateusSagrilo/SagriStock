import React from 'react'
import './Header.css'
import { RootState } from '../../redux'
import { connect } from 'react-redux'
import { Product } from '../../shared/Table/Table.mockdata'

type HeaderProps = {
    title: string
}
const Header: React.FC<HeaderProps> = (props) => {
    return <header className='AppHeader'>
        <h1>{props.title}</h1>
    </header>
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0]
})


export default connect(mapStateToProps)(Header)