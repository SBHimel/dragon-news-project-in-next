'use client'
import React from 'react';
import { useForm } from "react-hook-form";

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    console.log(data);
    // { name, photo, email, password, terms }
    const {email, name,photo, password} = data;
    console.log(name, photo);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Register your account</h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(handleRegisterFunc)}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              {...register("photo", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">Photo URL is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">Minimum 6 characters</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="checkbox checkbox-sm border-gray-400"
            />
            <span className="text-sm text-gray-600">
              Accept Term & Conditions
            </span>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">You must accept terms</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3.5 rounded-2xl transition-all duration-200"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;