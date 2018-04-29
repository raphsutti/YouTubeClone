import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // run onInputChange() when onChange occurs
    return <input onChange={this.onInputChange} />;
  }

  // detect events
  onInputChange() {

  }
}

export default SearchBar;