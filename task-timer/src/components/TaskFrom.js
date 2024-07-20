import React, {useState} from 'react';

function TaskForm({onAdd}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return;

        onAdd({text, time: 0});
        setText('');
    };

    return (
        <form onSubmit={onSubmit} className="task-form">
            <input
                type="text"
                placeholder="Add new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;