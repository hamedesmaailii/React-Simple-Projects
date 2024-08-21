import {useState} from 'react';
import BookDetail from './BookDetail'
import AddBookForm from './AddBookForm';

function BookList({books, onAddBook}) {
    const [selectedBook, setSelectedBook] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="book-list">
            <h2>Library</h2>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.id} onClick={() => setSelectedBook(book)}>
                        {book.title}
                    </li>
                ))}
            </ul>
            {selectedBook && <BookDetail book={selectedBook}/>}
            <AddBookForm onAddBook={onAddBook}/>
        </div>
    );
}

export default BookList;