import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Results from './../../src/components/Results';
import Result from './../../src/components/Result';

describe("Results", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Results />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    beforeEach(() => {
      this.instance = ReactTestUtils.renderIntoDocument(
        <Results
            player1Value="ValueForPlayer1"
            player2Value="ValueForPlayer2"
            className="testClass" />
      );
    });

    it('has a class', () => {
      expect(this.instance.props.className).toBe("testClass");

      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "testClass");
      expect(div).toBeDefined();
    });

    it('has a title with inline style and default text', () => {
      let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "h2");
      expect(h2.textContent).toBe("Result");
      expect(h2.style._values).toEqual({'text-align': 'center'});
    });

    it('has a title that uses props', () => {
      this.instance = ReactTestUtils.renderIntoDocument(<Results result="New Result" />);
      let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "h2");
      expect(h2.textContent).toBe("New Result");
    });

    it('constains a div.row that contains 2 children', () => {
      let div = ReactTestUtils.findRenderedDOMComponentWithClass(this.instance, "row");

      expect(div.children.length).toBe(2);
    });

    it('contains 2 Result, one per player, and has a class column', () => {
      let results = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Result);

      expect(results.length).toBe(2);

      expect(results[0].props.value).toBe(this.instance.props.player1Value);
      expect(results[1].props.value).toBe(this.instance.props.player2Value);
    });
  })
});
