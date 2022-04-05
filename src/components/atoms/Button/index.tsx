import React from "react";
import { Button } from "react-bootstrap";

export const SucessButton = (Props: any) => {
  return <Button variant="outline-success">✓</Button>;
};

export const DangerButton = (dangerProps: any) => {
  return <Button variant="outline-danger">✕</Button>;
};
