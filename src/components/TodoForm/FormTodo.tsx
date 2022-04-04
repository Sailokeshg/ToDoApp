import React from 'react';
import { Button, Form } from 'react-bootstrap';


function FormTodo({ addTodo }: any) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
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
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submitButton">
          Submit
        </Button>
      </Form>
    );
  }

  export default FormTodo;