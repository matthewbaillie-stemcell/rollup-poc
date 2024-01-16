import "./button.css";
import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
