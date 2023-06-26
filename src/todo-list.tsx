import React, { useContext } from "react";
import { TodoContext } from "./todo-context-provider";
import Todo from "./todo";

function TodoList() {
  const {
    todos,
    inputValue,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
    setInputValue,
  } = useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
