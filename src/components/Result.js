import React, {Component} from 'react';
import "./Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.resultClasses = 'Result';
    if (props.className)
      this.resultClasses += ' ' + props.className;
  }
  render() {
    return (
      <div className={this.resultClasses}>
        {this.props.value}
      </div>
    );
  }
}

export default Result;
