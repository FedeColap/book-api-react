import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <label htmlFor="searchterm">Search</label>  
        <input 
            type="text"
            placeholder="Search term" 
            id="searchterm"
            value={this.props.searchTerm}
            onChange={e => this.props.handleUpdate(e.target.value)}
        />
        <button type="submit" 
          onClick={e => e.preventDefault()}
        >Search</button>
      </div>   
    );
  }
}

export default SearchBox;