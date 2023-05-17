export function TodoItem({completed, title, id, toggletodo, deletetodo}) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggletodo(id, e.target.checked)}
                />
                <span className="label-text">{title}</span>
            </label>
            <button
                className="btn btn-danger"
                onClick={ () => deletetodo(id)}
            >Delete</button>
        </li>
    );
}