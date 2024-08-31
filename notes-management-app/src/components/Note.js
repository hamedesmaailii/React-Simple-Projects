import React, {useState} from 'react';

const Note = ({note, deleteNote, updateNote}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(note.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        updateNote(note.id, newText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewText(note.text);
    };

    return (
        <div className="note">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p>{note.text}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Note;