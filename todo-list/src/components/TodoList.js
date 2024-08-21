import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', complete: false},
        {id: 2, text: 'writing a simple project'},
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, {id: Date.now(), text: newTodo, complete: false}]);
            setNewTodo('');
        }
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, complete: !todo.completed} : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id, newText) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, text: newText} : todo
            )
        );
    };

    return (
        <div className="add-box">
            <h1>Todos List</h1>
            <div className="todosList">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </div>
            <div className="add-todos">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    );
}

export default TodoList;