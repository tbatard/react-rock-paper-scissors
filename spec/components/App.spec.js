import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Player from './../../src/components/Player';
import Results from './../../src/components/Results';
import RPS from './../../src/logic/RPS';
import { ButtonValues } from './../../src/components/Button'
import { GameResults } from './../../src/logic/RPS'

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

    it('contains an initial state', () => {
      expect(this.instance.state.player1Value).toBe("");
      expect(this.instance.state.player2Value).toBe("");
      expect(this.instance.state.result).toBe(GameResults.none);
    });

    it('contains a div container with a class row', () => {
      expect(this.instance._reactInternalFiber.child.type).toBe("div");
      expect(this.instance._reactInternalFiber.child.stateNode.className).toBe("row");
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

    it('contains a column results with properties', () => {
      let resultsArray = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Results);

      expect(resultsArray.length).toBe(1);
      expect(resultsArray[0].props.className).toBe("column");
      expect(resultsArray[0].props.player1Value).toBe(this.instance.state.player1Value);
      expect(resultsArray[0].props.player2Value).toBe(this.instance.state.player2Value);
      expect(resultsArray[0].props.result).toBe(this.instance.state.result);
    });

    it('calls onPlayerChoiceChanged when a state is set', () => {
      spyOn(this.instance, 'onPlayerChoiceChanged');

      this.instance.handlePlayer1ButtonClick("test");
      expect(this.instance.onPlayerChoiceChanged).toHaveBeenCalledTimes(1);

      this.instance.handlePlayer2ButtonClick("test");
      expect(this.instance.onPlayerChoiceChanged).toHaveBeenCalledTimes(2);
    });

    it('does not call getWinner when onPlayerChoiceChanged is fired and no players played', () => {
      spyOn(RPS, 'getWinner');

      this.instance.onPlayerChoiceChanged();
      expect(RPS.getWinner).not.toHaveBeenCalled();
    });

    it('does not call getWinner when onPlayerChoiceChanged is fired and only one player played', () => {
      spyOn(RPS, 'getWinner');

      this.instance.handlePlayer1ButtonClick(ButtonValues.rock);
      expect(RPS.getWinner).not.toHaveBeenCalled();

      this.instance.setState({
        player1Value: '',
        player2Value: ''
      })

      this.instance.handlePlayer2ButtonClick(ButtonValues.rock);
      expect(RPS.getWinner).not.toHaveBeenCalled();
    });

    it('calls getWinner when onPlayerChoiceChanged is fired and both players played', () => {
      spyOn(RPS, 'getWinner');

      this.instance.handlePlayer1ButtonClick(ButtonValues.paper);
      this.instance.handlePlayer2ButtonClick(ButtonValues.rock);

      expect(RPS.getWinner).toHaveBeenCalledWith(ButtonValues.paper, ButtonValues.rock);
    });

    it('updates result with RPS.getWinner return value', () => {
      spyOn(RPS, 'getWinner');

      RPS.getWinner.and.returnValue(GameResults.player1);

      this.instance.handlePlayer1ButtonClick(ButtonValues.paper);
      expect(RPS.getWinner).not.toHaveBeenCalled();

      this.instance.handlePlayer2ButtonClick(ButtonValues.rock);
      expect(RPS.getWinner).toHaveBeenCalled();

      expect(this.instance.state.result).toBe(GameResults.player1);

      RPS.getWinner.and.returnValue(GameResults.player2);
      this.instance.onPlayerChoiceChanged();

      expect(this.instance.state.result).toBe(GameResults.player2);
    });
  })
});
