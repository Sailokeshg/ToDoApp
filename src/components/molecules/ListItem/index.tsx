import { Typography } from "@mui/material";
import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../atoms/Button/index";
import { Grid } from "@mui/material";


interface Props {
  todo: any;
  index: number;
  markTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  undoMarkTodo: (index: number) => void;
}

const index = ({ todo, index, markTodo, removeTodo, undoMarkTodo }: Props) => {
  return (
    <Grid container direction="row" justifyContent="space-between"
    alignItems="center" >
      <Grid item>
      <Typography style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </Typography>
      </Grid>
      <Grid item>
        {todo.isDone ? (
          <Button variant="contained" onClick={() => undoMarkTodo(index)}>
            <UndoIcon />
          </Button>
        ) : (
          <Button variant="contained" onClick={() => markTodo(index)}>
            <DoneIcon />
          </Button>
        )}
        <Button variant="contained" onClick={() => removeTodo(index)}>
          <CloseIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default index;
