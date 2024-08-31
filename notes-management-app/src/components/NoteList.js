import React from 'react';
import Note from './Note';

const NoteList = ({notes, deleteNote, updateNote}) => {
    return (
        <div className="note-list">
            {notes.length === 0 ? (
                <p>No notes available.</p>
            ) : (
                notes.map((note) => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote}/>
                ))
            )}
        </div>
    );
};

export default NoteList;