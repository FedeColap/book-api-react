import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {
  render() {
    
    
    return (
      
      <div className="SearchBox">
        <label htmlFor="searchterm">Search</label>  
        <input className="scatola"
            type="text"
            placeholder="Search term" 
            
            name="searchterm"
            // defaultValue={this.props.searchTerm}
          onChange ={e => this.props.handleUpdate(e.target.value)} 
        />
        <button type="submit" 
          aria-label="Submit Button"
          onClick={e => this.props.handleSubmission(e) }
        >Search</button>
      </div>   
    );
  }
}

export default SearchBox;