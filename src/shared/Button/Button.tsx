import React from 'react'
import './Button.css'

type ButtonProps = {
    content?: string;
    onClick?: () => void
    children: string
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
        className='AppButton'
        onClick={props.onClick}
    >
        {props.children || 'Nameless button'}
    </button>
}

export default Button