import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
    
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    // <input onChange={ (event) => this.setState({term: event.target.value }) } />
    return (
      <div className="search-bar">
          <input onChange={ (event) => this.onInputChange(event.target.value) } />
      </div>
    );  
  }

  onInputChange(term) {
    // this.setState({term: term})
    this.setState({term});
    this.props.onSearchTermChange(term);
  }



}

export default SearchBar;
