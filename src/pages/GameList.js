import React from 'react';
import GameModel from '../models/game';
import GameCard from '../components/GameCard';


class GameList extends React.Component {
state = {
  games: [],
}

componentDidMount() {
  // MAKE API CALL
  GameModel.all().then((data) => {
    console.log('data:', data);
    this.setState({ games: data.games })
  });
}

  renderGames() {
   
    return this.state.games.map((game, index) => {
      return (
        <GameCard game={game} key={game._id} />
       
      )
    });
  }

  

  render() {
    return (
      <div>
        <ul>
          {this.renderGames()}
        </ul>
      </div>
    )
  }
}

export default GameList;
