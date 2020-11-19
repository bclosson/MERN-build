import React from 'react';
import GameModel from '../models/game';

class NewGame extends React.Component {
  state = {
    title: '',
    pulisher: '',
    converArtUrl: '',
    completed: false,
  };

  handleInputChange = (event) => {
    if (event.target.name === 'completed') {
      this.setState((prevState) => {
        return { completed: !prevState.completed };
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    } 
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    // NOTE: this.state is only roperties for new game
    GameModel.create(this.state)
    .then((data) => {
      // this is the redirect after new game form is submitted to db
      this.props.history.push('/games');
    })
  }

  render() {
    return (
    <div>
      <h2>New Game</h2>
      <form onSubmit={this.handleFormSubmit}>
        <div className="formInput">
          <label htmlFor="title">Title</label>
          <input 
            onChange={this.handleInputChange}
            value={this.state.title}
            type="text" 
            name="title" 
          />
        </div>
        <div className="formInput">
          <label htmlFor="publisher">Publisher</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.publisher}
            type="text" 
            name="publisher" 
          />
        </div>
        <div className="formInput">
          <label htmlFor="coverArtUrl">Image URL</label>
          <input 
            onChange={this.handleInputChange}
            value={this.state.coverArtUrl}
            type="text" 
            name="coverArtUrl"
          />
        </div>
        <div className="formInput">
          <label htmlFor="completed">Completed</label>
          <input 
            onChange={this.handleInputChange}
            value={this.state.completed}
            type="checkbox" 
            id="completed" 
            name="completed"
          />
        </div>
        <input type="submit" value="Add New Game"/>
      </form>
    </div>
  )}
}

export default NewGame;