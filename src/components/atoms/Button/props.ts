import { ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant: ButtonVariant;
  onClick?: any;
  className?: string;
}
type ButtonVariant =  "outlined" | "contained" ;
