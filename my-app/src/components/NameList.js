import React from 'react'
import PersonList from './PersonList'
let nameArray = [
    {
        name: "Veekshith",
        language: "Rust",
        skill: 5
    }, 
    {
        name: "Pushpa",
        language: "Angular",
        skill: 7
    }, 
    {
        name: "Latha",
        language: "Python",
        skill: 3
    }]
const nameData = nameArray.map(person => <PersonList key={person.skill} person={person} />)
function NameList() {
    return (
        <div>
            {
                nameData
                
            }
        </div>
    )
}

export default NameList
