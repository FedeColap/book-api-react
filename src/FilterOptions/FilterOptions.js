import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        // const { filterOption } = this.props;
        return (
            <div className="FilterOptions">
                <label htmlFor="book_type">Available as ebook</label> 
                <select name="" id="print_type" >
                    <option 
                        value = 'true'
                        onClick={console.log('ciao yes')}
                    >Yes
                    </option>
                    <option 
                        value = 'false'
                        onClick={console.log('ciao no')}
                    >No 
                    </option>
                </select>
            </div>

        )
    }
}

export default FilterOptions