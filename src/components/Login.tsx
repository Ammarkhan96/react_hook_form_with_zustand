import React from 'react';
import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
}

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>();

  const submitData = (data: LoginFormData) => {
    console.log("Login Form Data: ", data);
    onLogin();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col w-64" onSubmit={handleSubmit(submitData)}>
        <label>Email</label>
        <input type='email' {...register("email")} className="border border-gray-300 p-1" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <label>Password</label>
        <input type='password' {...register("password")} className="border border-gray-300 p-1" />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

        <input type='submit' value='Login' className="mt-2 bg-blue-600 text-white p-2 cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;