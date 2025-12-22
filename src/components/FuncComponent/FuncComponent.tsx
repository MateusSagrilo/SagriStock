import React, {useState, useEffect} from 'react'
import './FuncComponent.css'

function FuncComponent (props: {name: string}) {
    const [age, setAge] = useState(30)

    useEffect(() => {
        console.log('component was created');
        
    }, [])

    useEffect(() => {
        console.log('Age has been updated to: ' + age);
        
    }, [age])

    return <div className='FuncComponent'>
        Olá, {props.name}, {age}
        <button onClick={() => {
            setAge(age + 1)
        }}>+</button>
    </div>
}

export default FuncComponent