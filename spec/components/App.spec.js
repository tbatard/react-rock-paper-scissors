import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Player from './../../src/components/Player';
import Results from './../../src/components/Results';
import ShallowRenderer from 'react-test-renderer/shallow';

describe("App", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    beforeEach(() => {
      this.instance = ReactTestUtils.renderIntoDocument(<App />);
    });

    it('contains a div container with a class row', () => {
      expect(this.instance._reactInternalFiber.child.type).toBe("div");
      expect(this.instance._reactInternalFiber.child.stateNode.className).toBe("row");
    });

    it('has an empty state for both players', () => {
      this.instance = ReactTestUtils.renderIntoDocument(<App />);
      expect(this.instance.state.player1Value).toBe("");
      expect(this.instance.state.player2Value).toBe("");
    });

    it('contains 2 columns Player', () => {
      let playerArray = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Player);
      expect(playerArray.length).toBe(2);

      let player1 = playerArray[0];
      expect(player1.props.className).toBe("column");
      expect(player1.props.name).toBe("Player 1");
      expect(player1.props.onButtonClick).toBe(this.instance.handlePlayer1ButtonClick);

      let player2 = playerArray[1];
      expect(player2.props.className).toBe("column");
      expect(player2.props.name).toBe("Player 2");
      expect(player2.props.onButtonClick).toBe(this.instance.handlePlayer2ButtonClick);
    });

    it('contains a column results', () => {
      let resultsArray = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Results);

      expect(resultsArray.length).toBe(1);
      expect(resultsArray[0].props.className).toBe("column");
    });
  })
});
