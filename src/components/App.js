import React, {Component} from 'react';
import Player from './Player';
import Results from './Results';
import "./Global.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Value: "",
      player2Value: ""
    };
  }

  handlePlayer1ButtonClick = (value) => {
    this.setState({
      player1Value: value
    })
  }

  handlePlayer2ButtonClick = (value) => {
    this.setState({
      player2Value: value
    })
  }

  render() {
    return (
      <div className="row">
        <Player onButtonClick={this.handlePlayer1ButtonClick} className="column" name="Player 1" />
        <Results
          player1Value={this.state.player1Value}
          player2Value={this.state.player2Value}
          className="column"
        />
        <Player onButtonClick={this.handlePlayer2ButtonClick} className="column" name="Player 2" />
      </div>
    );
  }
}
