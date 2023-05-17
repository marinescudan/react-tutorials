import {TodoItem} from "./TodoItem";

export function TodoList({todos, toggletodo, deletetodo}) {
    return (
        <>
            <ul className="todo-list">
                { todos.length === 0 && <li className="empty">No todos yet</li> }
                {todos.map(todo => {
                    return (
                        <TodoItem 
                            key={todo.id}
                            completed={todo.completed} title={todo.title}
                            id={todo.id} toggletodo={toggletodo} deletetodo={deletetodo} />
                    );
                })}
            </ul>
        </>
    );
}