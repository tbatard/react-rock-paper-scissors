import React, {Component} from 'react';
import Player from './Player';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Player className="column" name="Player 1" />
        <Player className="column" name="Player 2" />
      </div>
    );
  }
}

export default App;
