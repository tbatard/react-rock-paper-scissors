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

    it('contains a Player', () => {
      let player = ReactTestUtils.findRenderedComponentWithType(this.instance, Player);
      expect(player).toBeDefined();

      expect(player.props.name).toBe("Player 1");
    });
  })
});
