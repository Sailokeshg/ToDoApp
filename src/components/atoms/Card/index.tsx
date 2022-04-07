import * as React from "react";
import Card from "@mui/material/Card";

interface CardProps {
  title?: string;
  variant?: string;
  children?: React.ReactNode;
}

const style = {
  width: "auto",
  margin: "20px 20px 0px 0px",
  padding: "10px",
};
const Index = (props: CardProps) => {
  return <Card style={style}>{props.children}</Card>;
};

export default Index;
