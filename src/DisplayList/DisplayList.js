import React, { Component } from 'react';
import './DisplayList.css'
import DisplayResult from '../DisplayResult/DisplayResult'

class DisplayList extends Component {
    render() {
      const list = this.props.booksretrieved;
      console.log(list)

      return list.map(book => <p>{book.id}</p>)
      

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

      // list.items.map((file, key) => <DisplayResult {...file} key={key} />);
        // const { searchTerm, filterOption } = this.props;
        // const list = this.props.booksretrieved
        //     .filter(file => file.name.includes(searchTerm)
        //           && (filterOption === 'All' || file.status === filterOption))
        //     .map((file, key) => <DisplayResult {...file} key={key} />);
        // return (
        //   <div className="DisplayList">
        //     {/* {list} */} 
        //   </div>
        // );
        }
      
}
    
    // DisplayList.defaultProps = {
    //   files: []
    // };


export default DisplayList