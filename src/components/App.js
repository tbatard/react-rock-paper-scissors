import React, {Component} from 'react';
import Player from './Player';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Player />
    );
  }
}

export default App;
