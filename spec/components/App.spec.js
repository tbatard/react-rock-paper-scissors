import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Player from './../../src/components/Player';
import Result from './../../src/components/Result';
import ShallowRenderer from 'react-test-renderer/shallow';

describe("App", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    beforeEach(() => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);
      this.instance = renderer.getRenderOutput();
    });

    it('contains a div container with a class', () => {
      expect(this.instance.type).toBe("div");
      expect(this.instance.props.className).toBe("app-container");
    });

    it('contains 2 columns Player', () => {
      expect(this.instance.props.children.length).toBe(3);

      expect(this.instance.props.children[0].type).toBe(Player);
      expect(this.instance.props.children[0].props.className).toBe("column");
      expect(this.instance.props.children[0].props.name).toBe("Player 1");

      expect(this.instance.props.children[2].type).toBe(Player);
      expect(this.instance.props.children[2].props.className).toBe("column");
      expect(this.instance.props.children[2].props.name).toBe("Player 2");
    });

    it('contains a column results', () => {
      expect(this.instance.props.children.length).toBe(3);

      expect(this.instance.props.children[1].type).toBe(Result);
      expect(this.instance.props.children[1].props.className).toBe("column");
    });
  })
});
