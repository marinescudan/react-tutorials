import React, {useState} from 'react';

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === '') return;
        
        onSubmit(newItem);
        setNewItem('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="new-item-input">New item:</label>
                    <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item" />
                </div>
                <button className="button">Add a new item</button>
            </form>
        </>
    );
}