import './App.css';
import BookList from "./components/BookList";
import {useState} from "react";

const initialBooks = [
    {
        id: 1,
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        description: 'A novel about a totalitarian regime.'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        description: 'A novel about racial injustice.'
    },
    {
        id: 3,
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: 'Adventure',
        description: 'A novel about the quest to capture a giant whale.'
    }
];

function App() {
    const [books, setBooks] = useState(initialBooks)

    const handleAddBook = (book) => {
        setBooks([...books, book]);
    };
    
    return (
        <div className="App">
            <h1>Digital Library</h1>
            <BookList books={books} onAddBook={handleAddBook}/>
        </div>
    );
}

export default App;
