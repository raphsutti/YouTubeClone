import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDYomOy8E018K4w5b5UxDQoImpGecVm5H4';

// Create new component. This component should produce HTML
class App extends Component {
  // Constructor function to update state when user input search
  constructor(props) {
    super(props);
    // Initial state of blank videos array
    this.state = { videos: [] };

    // YouTube search using key and search term
    YTSearch({ key: API_KEY, term: 'corsair' }, (videos) => {
      // when key and value identical ie. videos: videos can condensed
      // below same as this.setState({ videos: videos });
      // Set state array videos to videos
      this.setState({ videos });
    });
  }
  // Render page with SearchBar and VideoList component
  render() {
    return (
      <div>
        <SearchBar />
        {/* passing data or props to VideoList */}
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// Put generated HTML into the DOM (onto the page)
ReactDOM.render(<App />, document.querySelector('.container'));