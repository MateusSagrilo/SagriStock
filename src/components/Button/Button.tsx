import React from 'react'
import './Button.css'

type ButtonProps = {
    content?: string;
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
        className='AppButton'
        onClick={props.onClick}
    >
        {props.content || 'Nameless button'}
    </button>
}

export default Button