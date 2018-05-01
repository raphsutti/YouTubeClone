import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDYomOy8E018K4w5b5UxDQoImpGecVm5H4';

// Create new component. This component should produce HTML
class App extends Component {
  // Constructor function to update state when user input search
  constructor(props) {
    super(props);
    // Initial state of blank videos array and selected video
    this.state = { 
      videos: [],
      selectedVideo: null 
    }; 

    this.videoSearch('Corsair');
  }

  // call back for search
  videoSearch(term) {
    // YouTube search using key and search term
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      // when key and value identical ie. videos: videos can condensed
      // below same as this.setState({ videos: videos });
      // Set state array videos to videos
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  // Render page with SearchBar and VideoList component
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        {/* passing data or props to VideoList */}
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    )
  }
}

// Put generated HTML into the DOM (onto the page)
ReactDOM.render(<App />, document.querySelector('.container'));