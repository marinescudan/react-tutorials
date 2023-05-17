function App() {
  return (
  <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="new-item-input">New item:</label>
        <input type="text" id="item" />
      </div>
      <button className="button">Add a new item</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="todo-list">
      <li className="">
        <label>
          <input type="checkbox" />
          <span className="label-text">Item 1</span>
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
  );
}

export default App;