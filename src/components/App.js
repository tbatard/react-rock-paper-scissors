import React, {Component} from 'react';
import Player from './Player';
import Results from './Results';
import RPS from './../logic/RPS';
import { GameResults } from './../logic/RPS';
import "./Global.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Value: "",
      player2Value: "",
      result: GameResults.none,
    };
  }

  handlePlayer1ButtonClick = (value) => {
    this.setState({player1Value: value}, () => {
      this.onPlayerChoiceChanged();
    });
  }

  handlePlayer2ButtonClick = (value) => {
    this.setState({player2Value: value}, () => {
      this.onPlayerChoiceChanged();
    });
  }

  onPlayerChoiceChanged = () => {
    if (this.state.player1Value && this.state.player2Value) {
      let result = RPS.getWinner(this.state.player1Value, this.state.player2Value);
      this.setState({result: result});
    }
  }

  render() {
    return (
      <div className="row">
        <Player onButtonClick={this.handlePlayer1ButtonClick} className="column" name="Player 1" />
        <Results
          player1Value={this.state.player1Value}
          player2Value={this.state.player2Value}
          result={this.state.result}
          className="column"
        />
        <Player onButtonClick={this.handlePlayer2ButtonClick} className="column" name="Player 2" />
      </div>
    );
  }
}
