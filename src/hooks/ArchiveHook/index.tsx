import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import Snackbar from "../../components/organisms/Snackbar";

export const useTodoArchive = () => {
  const [todos, setTodos] = React.useState<any>(
    JSON.parse(localStorage.getItem("archive") || "[]")
  );

  const moveTodo = (index: number) => {
    const newTodos = [...todos];
    var todoList = JSON.parse(localStorage.getItem("user") || "[]");
    if (todoList.indexOf(newTodos[index].text) === -1) {
      todoList.push(newTodos[index]);
      localStorage.setItem("user", JSON.stringify(todoList));
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else {
      render(<Snackbar />);
    }
  };

  const removeArchivedTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("archive", JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos, moveTodo, removeArchivedTodo };
};
