import React from 'react';
import TodoContextProvider from './TodoContext';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
