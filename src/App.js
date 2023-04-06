import React from 'react';
import TodoContextProvider from './todo-context-provider';
import TodoList from './todo-list';
import Footer from './footer';
import Header from './header';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h1>Todo List</h1>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
      <Footer />
    </div>
  );
}

export default App;
