import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import DisplayList from './DisplayList/DisplayList';
import './App.css';

class App extends Component {

  updateSearchTerm(searchTerm) {
    console.log('this is the word', searchTerm)
    // this.setState({
    //   searchTerm: term
    // })
  }
  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'true',
      books: []
    };
  }

  // componentDidMount() {
  //   const url = 'https://www.googleapis.com/books/v1/volumes?'
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'q': 'searchTerm', 
  //       'authorization': 'Bearer AIzaSyDI9IBFM0Lu_6Gu_5zDekNvkXF6QC0k-QI'
  //     }
  //   };

  //   fetch(url, options)
  //     .then(res => {
  //       if(!res.ok) {
  //         throw new Error('Something went wrong, please try again later.');
  //       }
  //       return res;
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         books: data,
  //         error: null
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: err.message
  //       });
  //     });
  // }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchForm 
            searchTerm={this.state.searchTerm}
            filterOption={this.state.filterOption}
            handleUpdate={term=>this.updateSearchTerm(term)}
            handleFilterChange={option => this.updateFilterOption(option)}
        />
        <DisplayList />
      </div>
    );
  }
  
}

export default App;
