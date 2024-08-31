import React, {useState, useEffect} from 'react';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';

const App = () => {
    const [notes, setNotes] = useState(() => {

        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => {
        setNotes([note, ...notes]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const updateNote = (id, updatedText) => {
        const updatedNotes = notes.map((note) =>
            note.id === id ? {...note, text: updatedText} : note
        );
        setNotes(updatedNotes);
    };

    return (
        <div className="app">
            <h1>Notes Management App</h1>
            <AddNoteForm addNote={addNote}/>
            <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote}/>
        </div>
    );
};

export default App;