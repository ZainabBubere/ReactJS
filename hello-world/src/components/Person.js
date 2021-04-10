import React from 'react'

function Person({person}) {

    return(
        <div>
            <h2>I am {person.name}. I am a {person.job}. I love {person.spouse}.</h2>
        </div>
    )
}

export default Person