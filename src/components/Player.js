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
        {buttonList}
      </div>
    );
  }
}

export default Player;
