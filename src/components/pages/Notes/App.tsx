import React from "react";
import { Card } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";
import Header from "../../organisms/Header";
import FormTodo from "../../molecules/TextField";
import Todo from "../../molecules/TodoList";
import "./App.css";

export let archiveList: any[];

function App() {
  archiveList = [];

  const [todos, setTodos] = React.useState<any>([
    {
      text: "Sample task",
      isDone: false,
    },
  ]);

  const addTodo = (text: string) => {
    let tempTodos = [];
    for (let i = 0; i < todos.length; i++) {
      tempTodos.push(todos[i].text);
    }
    console.log(tempTodos);
    if (tempTodos.indexOf(text) === -1) {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    } else {
      alert("Task already exists");
    }
  };

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    archiveList.push(newTodos[index].text);
    console.log(archiveList);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <h1 className="text-center">Todo Application</h1>

        <FormTodo addTodo={addTodo} />
        <React.Fragment>
          <ReactSortable list={todos} setList={setTodos} animation={200} sort>
            {todos.map((todo: any, index: number) => (
              <Card>
                <Card.Body>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </ReactSortable>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
