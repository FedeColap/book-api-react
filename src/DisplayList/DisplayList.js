import React, { Component } from 'react';
import './DisplayList.css'
import DisplayResult from '../DisplayResult/DisplayResult'

class DisplayList extends Component {
    render() {
        // const { searchTerm, filterOption } = this.props;
        // const list = this.props.files
        //     .filter(file => file.name.includes(searchTerm)
        //           && (filterOption === 'All' || file.status === filterOption))
        //     .map((file, key) => <DisplayResult {...file} key={key} />);
        return (
          <div className="DisplayList">
            {/* {list} */} 
          </div>
        );
        }
}
    
    DisplayList.defaultProps = {
      files: []
    };


export default DisplayList