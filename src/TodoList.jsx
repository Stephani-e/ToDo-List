import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const incomplete = total - completed;

    return (
        <>
            {todos.length === 0 && <p className='empty'>No todos Yet. Start Today!</p>}
            {todos.length > 0 && (
                <p className='count'>
                    You have a total of: <strong>{total}</strong> Todos.
                    Completed: <strong>{completed}</strong> &nbsp;
                    Incomplete: <strong>{incomplete}</strong>.
                    <br />
                    <span>Click on the checkbox to mark as completed.</span>
                </p>)
            }
            <ul className='list'>
                {todos.map(todo => (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </>
    )
}