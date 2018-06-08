import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Result from './../../src/components/Result';

describe("Result", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Result />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    beforeEach(() => {
      this.instance = ReactTestUtils.renderIntoDocument(<Result value="testValue" className="testClass" />);
    });

    it('has a value', () => {
      expect(this.instance.props.value).toBe("testValue");

      let divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(this.instance, "div");
      expect(divs[0].textContent).toBe("testValue");
    });

    it('has a default class', () => {
      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "Result");
      expect(div).toBeDefined();
    });

    it('has a class', () => {
      expect(this.instance.props.className).toBe("testClass");

      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "testClass");
      expect(div).toBeDefined();
    });
  });
});
