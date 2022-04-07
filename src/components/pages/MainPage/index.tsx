import React, { useEffect } from "react";
import Card from "../../atoms/Card/index";
import { ReactSortable } from "react-sortablejs";
import InputField from "../../molecules/InputForm/index";
import Todo from "../../molecules/ListItem/index";
import { useWindowResize } from "../../../hooks/WindowHook";
import { Typography } from "@mui/material";
import Layout from "../../templates/Layout";
import Snackbar from "../../organisms/Snackbar/index";
import { render } from "@testing-library/react";

function App() {
  const [todos, setTodos] = React.useState<any>(
    JSON.parse(localStorage.getItem("user") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(todos));
  }, [todos]);

  const windowSize = useWindowResize();

  if (windowSize.width < 800) {
    return (
      <React.Fragment>
        <Typography variant="h4">
          {" "}
          This page can't be displayed on your device,kindly switch to the
          desktop version
        </Typography>
      </React.Fragment>
    );
  }

  const addTodo = (text: string) => {
    let tempTodos = [];
    for (let i = 0; i < todos.length; i++) {
      tempTodos.push(todos[i].text);
    }
    if (tempTodos.indexOf(text) === -1) {
      const newTodos = [...todos, { text: text, isDone: false }];
      setTodos(newTodos);
    } else {
      render(<Snackbar />);
    }
  };

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const undoMarkTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isDone = false;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    var todo = JSON.parse(localStorage.getItem("archive") || "[]");
    todo.push(newTodos[index]);
    localStorage.setItem("archive", JSON.stringify(todo));
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Layout>
      <Typography variant="h3" className="text-center">
        Todo List
      </Typography>

      <InputField addTodo={addTodo} />
      <React.Fragment>
        <ReactSortable list={todos} setList={setTodos} animation={200} sort>
          {todos.map((todo: any, index: number) => (
            <Card variant="outlined">
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                undoMarkTodo={undoMarkTodo}
                removeTodo={removeTodo}
              />
            </Card>
          ))}
        </ReactSortable>
      </React.Fragment>
    </Layout>
  );
}

export default App;
