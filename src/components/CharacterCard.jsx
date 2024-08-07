import React from 'react';

function CharacterCard({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.species}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;
