import React from 'react'

function CharacterList({ characters }) {
  return (

    <div>{characters.map((list) => (<div key={list.id}>
        <p>{list.name}</p>
        <p>{list.species}</p>
        <img src={list.image} alt={list.name} /> </div>
    ))}
    </div>
   
  )
}

export default CharacterList;
