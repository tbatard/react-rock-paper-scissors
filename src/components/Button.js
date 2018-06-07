import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

export const ButtonValues = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors"
}

class Button extends Component {
  render() {
    return (
      <button className="button">{this.props.value}</button>
    );
  }
}

Button.propTypes = {
  values: PropTypes.oneOf(Object.keys(ButtonValues))
}

export default Button;
