import React from "react";

type TodoPropType = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  handleToggleTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
};
const Todo = ({ todo, handleToggleTodo, handleRemoveTodo }: TodoPropType) => {
  return (
    <li
      key={todo.id}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => handleRemoveTodo(todo.id)}><div className="custom-button">Remove</div></button>
    </li>
  );
};
export default Todo;
