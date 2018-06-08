import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Button from './../../src/components/Button';

describe("Button", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    let testOnButtonClickSpy;

    beforeEach(() => {
      testOnButtonClickSpy = jasmine.createSpy('onClick');
      this.instance = ReactTestUtils.renderIntoDocument(<Button onButtonClick={testOnButtonClickSpy} value="Rock" />);
    });

    it('contains a button with text', () => {
      expect(this.instance.props.value).toBe("Rock");

      let button = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "button");
      expect(button.textContent).toBe(this.instance.props.value);
    });

    it('contains a class', () => {
      let button = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "button");
      expect(button).toHaveClass("button");
      expect(button.className).toBe("button");
    });

    it('onButtonClick called when button is clicked', () => {
      expect(this.instance.props.onButtonClick).toBe(testOnButtonClickSpy);

      let button = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "button");

      ReactTestUtils.Simulate.click(button);
      expect(testOnButtonClickSpy).toHaveBeenCalled();
    });
  })
});
