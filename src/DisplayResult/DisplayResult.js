import React, { Component } from 'react';
import './DisplayResult.css';

function DisplayResult(props) {
   
        
        
        console.log(props.books)
        const bookList = props.books.map(book => <p>{book.id}</p>)
        return(
            <div>
            <h4>{book.volumeInfo.title}</h4>
            <p>{book.volumeInfo.authors}</p>
            <img className="image" src={book.volumeInfo.imageLinks.smallThumbnail} alt="this is an image of the book" />

          </div>
        )
    
}

export default DisplayResult