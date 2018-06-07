import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../../src/components/App';
import Button from './../../src/components/Button';

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

    it('contains a Button component', () => {
      let button = ReactTestUtils.findRenderedComponentWithType(this.instance, Button);
      expect(button).toBeDefined();
    });
  })
});
