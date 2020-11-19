import React from 'react';
import GameModel from '../models/game';
import GameCard from '../components/GameCard';


class GameShow extends React.Component {
  state = {
    game: {},
    gameId: '',
  }
  
  componentDidMount() {
    const gameId = this.props.match.params.id;

    GameModel.getOne(gameId)
      .then((data) => {
        // console.log('data:', data);

        this.setState({ game: data.game, gameId: this.props.match.params.id });
      })
  }

  deleteGame = () => {
    const gameId = this.props.match.params.id;
    console.log('console log game from delete:', gameId);
    GameModel.delete(gameId).then((res) => {
    })
    .then((res) => this.props.history.push('/games'));
  };

  render () {
    return (
      <div>
        <h1>See One Game</h1>
        <GameCard game={this.state.game} />
        <span 
          className="remove"
          onClick={this.deleteGame}>
          Remove
        </span>
      </div>
    )
  }
}
  

export default GameShow;
