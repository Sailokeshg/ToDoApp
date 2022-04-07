import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useState } from "react";

interface InputFieldProps {
  sx?: any;
  color?: any;
  onChange?: any;
  value?: string;
}

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    width: "900px",
    maxWidth: "100%",
  },
});

const Index = (props: InputFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <StyledTextField
      InputProps={{
        disableUnderline: true,
      }}
      type="search"
      placeholder="Enter a task"
      sx={props.sx}
      color={props.color}
      value={value}
      onChange={handleChange}
    ></StyledTextField>
  );
};

export default Index;
