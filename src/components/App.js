import React, {Component} from 'react';
import Button from './Button';
import { ButtonValues } from './Button';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let buttonList = Object.keys(ButtonValues).map((value) =>
          <Button key={value} value={value} />
    );

    return (
      <div className="buttonList">
        {buttonList}
      </div>
    );
  }
}

export default App;
