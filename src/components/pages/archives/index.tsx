import { Typography } from "@mui/material";
import React from "react";
import Card from "../../atoms/Card/index";
import { ReactSortable } from "react-sortablejs";
import Todo from "../../molecules/ArchiveListItem/index";
import Layout from "../../templates/Layout";
import { useTodoArchive } from "../../../hooks/ArchiveHook";

function App() {
  const { todos, setTodos, moveTodo, removeArchivedTodo } = useTodoArchive();

  return (
    <Layout>
      <Typography variant="h2" className="text-center">
        Archives
      </Typography>

      <React.Fragment>
        <ReactSortable list={todos} setList={setTodos} animation={200} sort>
          {todos.map((todo: any, index: number) => (
            <Card variant="outlined">
              <Todo
                key={index}
                index={index}
                todo={todo}
                moveTodo={moveTodo}
                removeTodo={removeArchivedTodo}
              />
            </Card>
          ))}
        </ReactSortable>
      </React.Fragment>
    </Layout>
  );
}

export default App;
