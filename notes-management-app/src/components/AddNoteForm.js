import React, {useState} from 'react';

const AddNoteForm = ({addNote}) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;

        const newNote = {
            id: Date.now(),
            text,
        };

        addNote(newNote);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-note-form">
            <input
                type="text"
                placeholder="Enter a new note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default AddNoteForm;