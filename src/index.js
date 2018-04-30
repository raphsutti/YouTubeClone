import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYomOy8E018K4w5b5UxDQoImpGecVm5H4';

// Create new component. This component should produce HTML
class App extends Component {
  // Constructor function to update state when user input search
  constructor(props) {
    super(props);
    
    this.state = { };

    // YouTube search using key and search term
    YTSearch({ key: API_KEY, term: 'corsair' }, (videos) => {
      // when key and value identical ie. videos: videos can condensed
      // below same as this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Put generated HTML into the DOM (onto the page)
ReactDOM.render(<App />, document.querySelector('.container'));