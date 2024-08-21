import React, {useState} from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, {...task, id: tasks.length + 1}]);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;