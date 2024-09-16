import React, { useState } from "react";

const TodoApp = () => {
  // State for storing the list of todos and the current input values
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null); // To track which item is being edited
  const [editValue, setEditValue] = useState(""); // The new value for editing

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear input field after adding
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Function to initiate edit mode for a todo
  const startEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  // Function to save the edited todo
  const saveEditTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editValue;
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      {/* Input for adding new todos */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Displaying the list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                {/* Input for editing the todo */}
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={saveEditTodo}>Save</button>
              </>
            ) : (
              <>
                <span>{todo}</span>
                {/* Edit and delete buttons */}
                <button onClick={() => startEditTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
