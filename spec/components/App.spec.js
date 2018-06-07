import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Button from './../../src/components/Button';
import { ButtonValues } from './../../src/components/Button'

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

    it('contains a Button for each values', () => {
      let buttons = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Button);
      expect(buttons.length).toBe(Object.values(ButtonValues).length);
    });

    it('contains a div for the buttonList and has a class buttonList', () => {
      let div = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "div");
      expect(div).toBeDefined();
      expect(div.children.length).toBe(Object.values(ButtonValues).length);
    });
  })
});
