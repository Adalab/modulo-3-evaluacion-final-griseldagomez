import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <div>
      <p>
        <Link to={`/detail/${character.id}`}>
          {character.name}
        </Link>
      </p>

      <p>Species:{character.species}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;
