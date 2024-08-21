import './App.css';
import {useState} from "react";
import EditTaskForm from "./components/EditTaskForm";
import TaskForm from "./components/TaskFrom";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const newTask = {id, ...task};
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => {
        const task = tasks.find((task) => task.id === id);
        setCurrentTask(task);
        setEditing(true);
    };

    const updateTask = (id, updatedText) => {
        setTasks(tasks.map((task) => (task.id === id ? {...task, text: updatedText} : task)));
        setEditing(false);
    };

    return (
        <div className="App">
            <h1>Task Timer</h1>
            {editing ? (
                <EditTaskForm
                    currentTask={currentTask}
                    onUpdate={updateTask}
                    onCancel={() => setEditing(false)}
                />
            ) : (
                <TaskForm onAdd={addTask}/>
            )}
            <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask}/>
        </div>
    );
}

export default App;