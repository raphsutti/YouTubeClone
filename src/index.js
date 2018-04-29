import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYomOy8E018K4w5b5UxDQoImpGecVm5H4';

// Create new component. This component should produce HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Put generated HTML into the DOM (onto the page)
ReactDOM.render(<App />, document.querySelector('.container'));