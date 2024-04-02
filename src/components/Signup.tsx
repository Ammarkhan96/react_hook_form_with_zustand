import React from 'react';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

type SignupProps = {
    onSignup: () => void;
};
  
  const Signup: React.FC<SignupProps> = ({ onSignup }) => {
    const schema: ZodType<SignupFormData> = z.object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(7).max(20),
      confirmPassword: z.string().min(7).max(20),
    }).refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ["confirmPassword"],
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SignupFormData>({ resolver: zodResolver(schema) });
  
    const submitData = (data: SignupFormData) => {
      console.log("Signup Form Data: ", data);
      onSignup(); 
    };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col w-64" onSubmit={handleSubmit(submitData)}>
        <label>First Name</label>
        <input type='text' {...register("firstName")} className="border border-gray-300 p-1" />
        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

        <label>Last Name</label>
        <input type='text' {...register("lastName")} className="border border-gray-300 p-1" />
        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

        <label>Email</label>
        <input type='email' {...register("email")} className="border border-gray-300 p-1" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <label>Age</label>
        <input type='number' {...register("age",{valueAsNumber: true})} className="border border-gray-300 p-1" />
        {errors.age && <span className="text-red-500">{errors.age.message}</span>}

        <label>Password</label>
        <input type='password' {...register("password")} className="border border-gray-300 p-1" />
        {errors.password && <span className="text-red-500 border-black-200">{errors.password.message}</span>}

        <label>Confirm Password</label>
        <input type='password' {...register("confirmPassword")} className="border border-gray-300 p-1" />
        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
    
        <input type='submit' value='Signup' className="mt-2 bg-blue-600 text-white p-2 cursor-pointer" />
      </form>
    </div>
  );
};

export default Signup;
