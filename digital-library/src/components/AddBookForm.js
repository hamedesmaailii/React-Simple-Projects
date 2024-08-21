import {useState} from 'react';

function AddBookForm({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author) return; // Basic validation
        onAddBook({title, author, genre, description, id: Date.now()});
        setTitle('');
        setAuthor('');
        setGenre('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-book-form">
            <h3>Add New Book</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookForm;