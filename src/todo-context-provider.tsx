import React, { createContext, useState } from "react";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export type TodoContextType = {
  todos: Todo[];
  inputValue: string;
  handleAddTodo: () => void;
  handleRemoveTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
  setInputValue: (value: string) => void;
};
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  inputValue: "",
  handleAddTodo: () => {},
  handleRemoveTodo: (id: number) => {},
  handleToggleTodo: (id: number) => {},
  setInputValue: (value: string) => {},
});

function TodoContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleRemoveTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const value = {
    todos,
    inputValue,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
    setInputValue,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
