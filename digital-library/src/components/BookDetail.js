import React from 'react';

function BookDetail({book}) {
    return (
        <div className="book-detail">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    );
}

export default BookDetail;