import React, { Component } from 'react';
import './DisplayResult.css';

class DisplayResult extends Component {
    render() {
        return(
            <div className="DisplayResult">
                <div className="ListItem__title">{this.props.name}</div>
            <div className="ListItem__size">{this.props.size}</div>
            </div>
        )
    }
}

export default DisplayResult