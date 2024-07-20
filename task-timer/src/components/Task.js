import React, {useEffect, useState} from 'react';

function Task({task, onDelete, onToggle, onEdit}) {
    const [time, setTime] = useState(task.time);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!running && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running, time]);

    const toggleTimer = () => {
        setRunning(!running);
    };

    return (
        <div className="task">
            <h3>{task.text}</h3>
            <p>Time spent: {time} seconds</p>
            <button onClick={toggleTimer}>{running ? 'Stop' : 'Start'}</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onEdit(task.id)}>Edit</button>
        </div>
    )
}

export default Task;