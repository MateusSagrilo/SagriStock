import React from 'react'
import './Container.css'

type ContainerProps = {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className="AppContainer">
      {props.children}
    </div>
  )
}

export default Container