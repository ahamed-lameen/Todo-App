/**
 * 
 * todoAPP.jsx
 * @author - Lameen
 * @date - 23/03/2023
 **/

import { useState } from "react";
import './style.css'
let id = 0;

function TodoApp() {
    const [todo, setTodo] = useState([]);
    const [label, setLabel] = useState("");
    const [labelError, setLabelError] = useState("");
    
    const addTodo = () => {
        if(label.trim().length === 0) {
            setLabelError("Please enter something");
            }
        else {
            setLabelError("");
            setTodo([...todo, {id: id++, label}]);
            setLabel("");
        }  
    }

    const deleteTodo = (todoID) => {
        var newTodo = todo.filter((todos) => {
            return todoID !== todos.id;
        });
        setTodo(newTodo);
    }
    
    const deleteAll = () => {
        setTodo([]);
    }

    return (
        <div className="box">
            <h1>Todo App</h1>
            <input type="text" size={31} placeholder="Add your new todo" value={label}  className="text-field"  
            onChange = {event => setLabel(event.target.value)} />
            <button className="primary-button" onClick={() => addTodo()}>+</button>
            <p className="error-todo">{labelError}</p>
            {todo.map((todos) => (
            <>
                <div className="label-box row">
                    <p className="todo-label cell-1">{todos.label}</p>
                    <button className="third-button" onClick={() => deleteTodo(todos.id)}>-</button>
                </div>
            </>
            ))}
            <div>
                <label className="pending-todo">You have {todo.length} pending tasks</label>
                <button className="secondary-button" onClick={() => deleteAll()}>Clear All</button>
            </div>
        </div>
    );
}

export default TodoApp;