'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

  const [isShowPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const router = useRouter(); // এটি ফাংশনের একদম উপরে (RegisterPage এর ভেতর) ডিফাইন করবেন

const handleRegisterFunc = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      alert(`❌ Error: ${error.message}`);
    }

    if (res) {
      alert(`✅ Signup successful 🎉`);
      // এই লাইনটি যোগ করুন যাতে রেজিস্ট্রেশন শেষে লগইন পেজে নিয়ে যায়
      router.push('/login'); 
    }
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
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required"
                }
              })}
              className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <span
              onClick={() => setShowPassword(!isShowPassword)}
              className="absolute right-4 top-[42px] cursor-pointer"
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
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
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3.5 rounded-2xl transition-all duration-200"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <Link href="/login" className="text-blue-600 font-bold">Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;