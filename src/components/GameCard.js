import React from 'react';
import { Link } from 'react-router-dom';

function GameCard(props) {
  return (
    <Link to={`/games/${props.game._id}`}>
      <div>
        <img 
          className="gameCardImg" 
          src={props.game.coverArtUrl} 
          alt={props.game.title}/>
        <h2>{props.game.title}</h2>
        <h3>{props.game.publisher}</h3>
      </div>
    </Link>
  )
}

export default GameCard;