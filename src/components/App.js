import React, {Component} from 'react';
import Player from './Player';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Player name="Player 1" />
        <Player name="Player 2" />
      </div>
    );
  }
}

export default App;
