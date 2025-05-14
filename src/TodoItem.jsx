export function TodoItem({ completed, id, title, details, dueDate, priority, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target)} />
                <div className="item-container">
                    <strong>{title}</strong>
                    <div className="item">
                        <small>{details}</small><br />
                        <div className="meta">
                            <span>Due: {dueDate}</span>
                            <span className={`priority ${priority}`}>Priority: {priority}</span>
                        </div>
                    </div>
                </div>
                <button onClick={() => deleteTodo(id)} className='btn'>Delete</button>
            </label>
        </li>
    )
}