import React from 'react';
import TaskDetail from './TaskDetail';

const TaskList = ({tasks}) =>  {
    return (
        <div>
            <h3>Task List</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskDetail task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;