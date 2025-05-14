import React, { useState } from 'react';
import './styles.css';

export function NewTodoForm({ onSubmit }) {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [errors, setErrors] = useState({});
    // const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!details.trim()) newErrors.details = "Details are required";
        if (!dueDate.trim()) newErrors.dueDate = "Due date is required";
        if (!priority.trim()) newErrors.priority = "Priority is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        onSubmit({title, details, dueDate, priority});
        setTitle("");
        setDetails("");
        setDueDate("");
        setPriority("");
    }


    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="title">Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" />
                {errors.title && <span className='error'>{errors.title}</span>}
            </div>

            <div className="form-row">
                <label htmlFor="details">Details</label>
                <textarea value={details} onChange={e => setDetails(e.target.value)} id="details" rows="3"></textarea>
                {errors.details && <span className='error'>{errors.details}</span>}
            </div>

            <div className="form-row">
                <label htmlFor="due-date">Due Date</label>
                <input value={dueDate} onChange={e => setDueDate(e.target.value)} type="date" id="due-date" />
                {errors.dueDate && <span className='error'>{errors.dueDate}</span>}
            </div>

            <div className="form-row">
                <label htmlFor="priority">Priority</label>
                <select value={priority} onChange={e => setPriority(e.target.value)} id="priority">
                    <option value="">--Please choose an option--</option>
                    <option value="low" className='low'>Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                {errors.priority && <span className='error'>{errors.priority}</span>}
            </div>

            <button className='btn'>Add</button>
        </form>
    )
};