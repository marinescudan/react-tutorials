import React, {useState} from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setItems((currentItems) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ];
    });
    setNewItem('');
  }

  function toggleItem(id, completed) {
    setItems((currentItems) => {
      return currentItems.map(item => {
        if (item.id === id) {
          return {...item, completed};
        }
        return item;
      });
    });
  }

  function deleteItem(id) {
    setItems((currentItems) => {
      return currentItems.filter(item => item.id !== id);
    });
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
    <h1 className="header">Todo List</h1>
    <ul className="todo-list">
      { items.length === 0 && <li className="empty">No items yet</li> }
      {items.map(item => {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={e => toggleItem(item.id, e.target.checked)}
              />
              <span className="label-text">{item.title}</span>
            </label>
            <button className="btn btn-danger" onClick={ () => deleteItem(item.id)} >Delete</button>
          </li>
        );
      })}
    </ul>
  </>
  );
}

export default App;