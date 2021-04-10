import React from 'react'

const Greet = props => {
    const {name, realName} = props
    console.log(props)
    return (
        <div>
            <h1>Say Hi to {name}, oops! {realName}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Greet;