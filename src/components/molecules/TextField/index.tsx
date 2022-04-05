import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Index({ addTodo }: any) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const inputRef: any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add a Todo task</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Add new todo task"
          ref={inputRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="submitButton">
        Submit
      </Button>
    </Form>
  );
}

export default Index;
