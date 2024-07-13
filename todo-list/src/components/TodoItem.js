import React, {useState} from 'react';

function TodoItem({todo, toggleComplete, deleteTodo, editTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing)
    };

    return (
        <div className="todo-items" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <div className="left-section">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                ) : (
                    todo.text
                )}
            </div>
            <div className="buttons">
                <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;