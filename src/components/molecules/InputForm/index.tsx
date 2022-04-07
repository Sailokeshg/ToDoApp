import React, { useState } from "react";
import Button from "../../atoms/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

interface Props {
  addTodo: (text: string) => void;
}

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    maxWidth: "100%",
  },
});

const Index = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!value) return;
    console.log("submit called");
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <Grid container direction="row" spacing={4} alignItems="center" paddingTop="20px">
        <Grid item xs={6} md={8}>
          <StyledTextField
            variant="outlined"
            label="Write a Todo task"
            sx={{ width: "100%" }}
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Index;
