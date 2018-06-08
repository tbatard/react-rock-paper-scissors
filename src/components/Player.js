import React, {Component} from 'react';
import Button from './Button';
import { ButtonValues } from './Button';

class Player extends Component {
  render() {
    let buttonList = Object.keys(ButtonValues).map((value, i) =>
          <Button key={i} onButtonClick={this.props.onButtonClick} value={value} />
    );

    return (
      <div className={this.props.className}>
        <h2>{this.props.name}</h2>
        <div className="buttonList">
          {buttonList}
        </div>
      </div>
    );
  }
}

export default Player;
