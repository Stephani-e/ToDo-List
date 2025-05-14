import React, { useEffect, useState } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("todos")
        if (localValue === null) return []

        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)); 
        
    })

    function toggleTodo(id, target) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: target.checked };
                }
                return todo;
            });
        });
    }

    function addTodo(todo) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { 
                    id: crypto.randomUUID(), completed: false,
                    ...todo 
                }
            ];
        });
    }
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    return (
        <>
           <h1 className='head'>CREATE YOUR DAILY PLAN</h1>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className='header'>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}