import React, {useState} from 'react';

const AddTaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({title, description, dueDate, priority});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Due Date:</label>
                <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={"Low"}>Low</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"High"}>High</option>
                </select>
            </div>
            <button onSubmit={handleSubmit}>Add Task</button>
        </form>
    );
};

export default AddTaskForm;