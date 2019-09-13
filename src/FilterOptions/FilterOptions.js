import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        const { filterOption } = this.props;
        return (
            <div className="FilterOptions">
                <label htmlFor="book_type">Available as ebook</label> 
                <select name="" id="print_type" >
                    <option 
                        value ="true"
                        onChange={e => this.props.handleFilterChange(e.target.value)}
                    >Yes
                    </option>
                    <option 
                        value ="false"
                        onChange={e => this.props.handleFilterChange(e.target.value)}
                    >No 
                    </option>
                </select>
            </div>

        )
    }
}

export default FilterOptions