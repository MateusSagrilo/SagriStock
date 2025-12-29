import React from "react";
import "./Form.scss";

interface FormProps {
  children: React.ReactNode;
  title?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ children, onSubmit, title }: FormProps) {
  const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };
  return (
    <form className="AppForm" onSubmit={preventedSubmit}>
      {title && <div className="Title">{title}</div>}
      {children}
    </form>
  );
}

export default Form;
