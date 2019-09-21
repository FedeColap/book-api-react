import React, { Component } from 'react';
import './DisplayList.css'
// import DisplayResult from '../DisplayResult/DisplayResult'

class DisplayList extends Component {

  // constructor(props){
  //   super(props)
  // }
    render() {
      console.log(this.props)
      // const list = this.props
      // console.log(list)

      const books = this.props.books;

      return books.map(book => 
          <div>
            <h4>{book.volumeInfo.title}</h4>
            <p>{book.volumeInfo.authors}</p>
            <img className="image" src={book.volumeInfo.imageLinks.smallThumbnail} alt="this is an image of the book" />

          </div>)

      // return books.map(book => <div>{book.id}</div>);

      // return <p>hello</p>
      
      
      

      // for (let i = 0; i < list.items.length; i++){
      //   return (
      //     <div className="DisplayList">
      //       <DisplayResult />
      //     </div>
      //   );

        // $('#results-list').append(
        //   `<li><h3>${responseJson.data[i].fullName}</h3>
        //   <p>${responseJson.data[i].description}</p>
        //   <a href="${responseJson.data[i].url}" target="_blank"><p>${responseJson.data[i].url}</p></a>
        //   </li>`
        // )};
// return list.items.map((file, key) => <DisplayResult {...file} key={key} />);
        // const { searchTerm, filterOption } = this.props;
        // const list = this.props.booksretrieved
        //     .filter(file => file.name.includes(searchTerm)
        //           && (filterOption === 'All' || file.status === filterOption))
        //     .map((file, key) => <DisplayResult {...file} key={key} />);
        // return (
        //   <div className="DisplayList">
        //     {list} 
        //   </div>
        // );
        }
      
}
    
    // DisplayList.defaultProps = {
    //   state: {
    //     items:[]
    //   }
    // };


export default DisplayList