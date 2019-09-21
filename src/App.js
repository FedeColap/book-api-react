import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import DisplayList from './DisplayList/DisplayList';
import './App.css';

const searchURL = 'https://www.googleapis.com/books/v1/volumes'

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

class App extends Component {

   formtheUrl() {
    const params = {
      q: this.state.searchTerm      
    };
    const queryString = formatQueryParams(params)
  
    const url = searchURL + '?' + queryString;
  
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        books: data.items,
        error: null,  
      })
      console.log(this.state.books);
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  updateSearchTerm(e) {  
    
    this.setState({
      searchTerm: e
    })
    console.log(e)
  }

  submitTerm(e) {
    e.preventDefault();
    console.log('submitted', this.state.searchTerm)
    this.setState({
      searchTerm: e
    })
    this.formtheUrl();
  }


  updateFilterOption(e) {  
    this.setState({
      filterOption : e
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'true',
      books: []
    };
    this.updateFilterOption= this.updateFilterOption.bind(this)
    this.updateSearchTerm= this.updateSearchTerm.bind(this)
    this.submitTerm= this.submitTerm.bind(this)
    // this.formtheUrl= this.formtheUrl.bind(this)
  }

  render() {

    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchForm 
            searchTerm={this.state.searchTerm}
            filterOption={this.state.filterOption}
            handleUpdate={this.updateSearchTerm}
            handleFilterChange={this.updateFilterOption}
            handleSubmission={this.submitTerm}
        />
        <DisplayList books={this.state.books}/>
      </div>
    );
  }
  
}

export default App;