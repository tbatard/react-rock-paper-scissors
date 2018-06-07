import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Player from './../../src/components/Player';

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

    it('contains 2 Players', () => {
      let players = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Player);
      expect(players.length).toBe(2);

      expect(players[0].props.name).toBe("Player 1");
      expect(players[1].props.name).toBe("Player 2");
    });
  })
});
