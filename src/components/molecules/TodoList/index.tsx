import React from "react";
import MuiButton from "../../atoms/Button/index";
import "./index.css";

function index({ todo, index, markTodo, removeTodo }: any) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <MuiButton variant="contained" onClick={() => markTodo(index)}>
          ✓
        </MuiButton>{" "}
        <MuiButton variant="contained" onClick={() => removeTodo(index)}>
          ✕
        </MuiButton>
      </div>
    </div>
  );
}

export default index;
