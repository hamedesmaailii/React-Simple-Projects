import React, {useState} from 'react';

function EditTaskForm({currentTask, onUpdate, onCancel}) {
    const [text, setText] = useState(currentTask.text);

    const onSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentTask.id, text);
    };

    return (
        <form onSubmit={onSubmit} className="task-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Update Task</button>
            <button onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default EditTaskForm;