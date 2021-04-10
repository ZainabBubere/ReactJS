import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Monica', 'Chandler', 'Ross']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {name : 'Monica', job : 'Chef', spouse : 'Chandler'},
        {name : 'Chandler', job : 'Transposter', spouse : 'Monica'},
        {name : 'Ross', job : 'Paleontologist', spouse : 'Rachel'}
    ]
    //const personList = persons.map(person => (<h2>I am {person.name}. I am a {person.job}. I love {person.spouse}.</h2>))
    const personList = persons.map((person,index) => <Person key={index} person={person}></Person>)
    return(
        <div>{personList}</div>
        // <div>
        //     {
        //         //nameList
        //         personList
        //     }
        // </div>
    )
}

export default NameList