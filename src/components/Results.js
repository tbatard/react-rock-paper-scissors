import React, {Component} from 'react';
import Result from './Result'

class Results extends Component {
  render() {
    let h2Style = {
      textAlign: 'center'
    };
    return (
      <div className={this.props.className}>
        <h2 style={h2Style}>Result</h2>
        <div className="row">
          <Result value={this.props.player1Value} />
          <Result value={this.props.player2Value} />
        </div>
      </div>
    );
  }
}

export default Results;
