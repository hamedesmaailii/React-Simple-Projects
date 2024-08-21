import React from 'react';

const TaskDetail = ({task}) => {
    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
        </div>
    );
};

export default TaskDetail;