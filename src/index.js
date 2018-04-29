import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce HTML
const App = () => {
  return <div>Hi!</div>;
}

// Put generated HTML into the DOM (onto the page)
ReactDOM.render(<App />, document.querySelector('.container'));