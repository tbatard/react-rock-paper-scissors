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
      this.instance = ReactTestUtils.renderIntoDocument(<Result className="testClass" />);
    });

    it('has a class', () => {
      expect(this.instance.props.className).toBe("testClass");

      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "testClass");
      expect(div).toBeDefined();
    });

    it('has a title', () => {
      let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "h2");
      expect(h2.textContent).toBe("Result");
    });
  })
});
