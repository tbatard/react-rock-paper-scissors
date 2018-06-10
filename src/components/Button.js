import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

export const ButtonValues = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
}

class Button extends Component {
  handleClick = (event) => {
    this.props.onButtonClick(this.props.value);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="button">{this.props.value}</button>
    );
  }
}

Button.propTypes = {
  values: PropTypes.oneOf(Object.keys(ButtonValues))
}

export default Button;
