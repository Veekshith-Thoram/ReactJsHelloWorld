import React from 'react'
let nameArray = ["Veekshith", "Pushpa", "Latha"]
const nameData = nameArray.map(name => <h2>{name}</h2>)
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
