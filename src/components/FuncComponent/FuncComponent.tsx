import React, {useState} from 'react'
import './FuncComponent.css'

function FuncComponent (props: {name: string}) {
    const [age, setAge] = useState(30)

    return <div className='FuncComponent'>
        Olá, {props.name}, {age}
        <button onClick={() => {
            setAge(age + 1)
        }}>+</button>
    </div>
}

export default FuncComponent