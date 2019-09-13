import React, { Component } from  'react';
import './SearchForm.css'
import SearchBox from '../SearchBox/SearchBox'
import FilterOptions from '../FilterOptions/FilterOptions'

class SearchForm extends Component {
    render() {
        return (
          <form>
            <div className="SearchBar">
              <SearchBox 
                searchTerm={ this.props.searchTerm }
                handleUpdate={this.props.handleUpdate}
              />
                
            </div>
            <div className="SearchBar__controls">
              <FilterOptions 
                filterOption={ this.props.filterOption }
                handleFilterChange={ this.props.handleFilterChange }
              />
            </div>
          </form>
          
        );
      }
}

export default SearchForm