import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  // Add a new TODO
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newEntry: Todo = { id: Date.now(), text: newTodo };
      setTodos([...todos, newEntry]);
      setNewTodo('');
    }
  };

  // Delete a TODO
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Enable edit mode
  const handleEditTodo = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save edited TODO
  const handleSaveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo,
      ),
    );
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>TODO App</h1>

      {/* Add TODO */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: '5px', marginRight: '10px', width: '70%' }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {/* TODO List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          >
            {editingId === todo.id ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ padding: '5px', flex: 1 }}
                />
                <button onClick={handleSaveEdit} style={{ marginLeft: '10px' }}>
                  Save
                </button>
              </div>
            ) : (
              <>
                <span style={{ flex: 1 }}>{todo.text}</span>
                <div>
                  <button
                    onClick={() => handleEditTodo(todo.id, todo.text)}
                    style={{ marginRight: '5px' }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
