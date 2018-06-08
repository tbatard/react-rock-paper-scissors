import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Player from './../../src/components/Player';
import Button from './../../src/components/Button';
import { ButtonValues } from './../../src/components/Button'

describe("Player", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    let handleClick = (event) => {};

    beforeEach(() => {
      this.instance = ReactTestUtils.renderIntoDocument(<Player onButtonClick={handleClick} className="testClass" name="Player X" />);
    });

    it('contains a Button for each values', () => {
      let buttons = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Button);
      expect(buttons.length).toBe(Object.values(ButtonValues).length);

      for (let i = 0; i < Object.values(ButtonValues).length; i++) {
        let button = buttons[i];
        expect(button._reactInternalFiber.key).toBe('' + i);
        expect(button.props.onButtonClick).toBe(handleClick);
        expect(button.props.value).toBe(Object.values(ButtonValues)[i].toLowerCase());
      }
    });

    it('contains a div for the buttonList', () => {
      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "buttonList");
      expect(div).toBeDefined();
      expect(div.children.length).toBe(Object.values(ButtonValues).length);
    });

    it('has a name', () => {
      expect(this.instance.props.name).toBe("Player X");

      let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "h2");
      expect(h2).toBeDefined();
      expect(h2.textContent).toBe("Player X");
    });

    it('has a class', () => {
      expect(this.instance.props.className).toBe("testClass");

      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "testClass");
      expect(div).toBeDefined();
    });

    it('has an onButtonClick props', () => {
      expect(this.instance.props.onButtonClick).toBe(handleClick);
    });
  })
});
