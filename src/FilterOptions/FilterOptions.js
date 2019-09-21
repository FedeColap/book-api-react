import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        // const { filterOption } = this.props;
        
        return (
            <div className="FilterOptions">
                <label htmlFor="book_type">Available as ebook</label> 
                <select 
                        name="" 
                        id="print_type"  
                        onChange ={e => this.props.handleFilterChange(e.target.value)}>
                    <option value = 'eBooks'>Yes</option>
                    <option value = ''>No </option>
                </select>
            </div>

        )
    }
}

export default FilterOptions