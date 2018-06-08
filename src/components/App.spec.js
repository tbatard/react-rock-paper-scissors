import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './../src/App';

describe("App", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe("Content", function() {
    let instance;

    afterEach(function() {
      if (instance && ReactTestUtils.isCompositeComponent(instance)) {
        React.unmountComponentAtNode(instance.getDOMNode().parent);
      }
    });

    beforeEach(function() {
      instance = ReactTestUtils.renderIntoDocument(<App />);
    });

    it('has a title', () => {
      var title = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, "title");
      console.log(title);
    });
  })
});
