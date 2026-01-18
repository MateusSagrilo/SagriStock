import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Authentication/Authentication.actions";
import { AppDispatch } from "../../redux"



const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  const handleLogin = async () => {
    try {
      await dispatch(login(form));
    } catch (err) {
      let errorMessage = "Um erro desconhecido ocorreu";
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosError = err as any;
        errorMessage = axiosError.response?.data?.message || axiosError.message || errorMessage;
      }
      
      Swal.fire("Error", errorMessage, "error");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form title="Login - SagriStock" onSubmit={handleLogin}>
      <Input
        label="User"
        name="user"
        value={form.user}
        onChange={handleInputChange}
        placeholder="E.g.: your_user_name321"
      />
      <Input
        type="password"
        name="pass"
        value={form.pass}
        onChange={handleInputChange}
        label="Passowrd"
      />
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
