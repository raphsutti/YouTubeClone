import React, { Component } from 'react';

class SearchBar extends Component {
  // state setup
  constructor(props) {
    super(props);
    // outside constructor, use this.setState
    this.state = { term: '' };
  }

  render() {
    // value set to current state
    // update 'term' state with user input using this.setState
    // causes re-render and value updated
    // show value using this.state
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value }) }/>
        Value of the input: { this.state.term }
      </div>
    );
  }
}

export default SearchBar;