import React, {Component} from 'react';
import Button from './Button';
import { ButtonValues } from './Button';

class Player extends Component {
  render() {
    let buttonList = Object.keys(ButtonValues).map((value) =>
          <Button key={value} value={value} />
    );

    return (
      <div>
        <h2>{this.props.name}</h2>
        <div className="buttonList">
          {buttonList}
        </div>
      </div>
    );
  }
}

export default Player;
