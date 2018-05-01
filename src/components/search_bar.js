import React, { Component } from 'react';

class SearchBar extends Component {
  // state setup
  constructor(props) {
    super(props);
    // outside constructor, use this.setState inside constructor use this.state
    this.state = { term: '' };
  }

  render() {
    // value set to current state
    // update 'term' state with user input using this.setState
    // causes re-render and value updated
    // show value using this.state in <input />
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    // set state of search term
    this.setState({term});
    // call back function to input.js
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;