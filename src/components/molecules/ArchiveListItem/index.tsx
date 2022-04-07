import React from "react";
import Button from "../../atoms/Button";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

function index({ todo, index, moveTodo, removeTodo }: any) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outlined" onClick={() => moveTodo(index)}>
          <UnarchiveIcon />
        </Button>

        <Button variant="outlined" onClick={() => removeTodo(index)}>
          <DeleteForeverIcon />
        </Button>
      </div>
    </div>
  );
}

export default index;
