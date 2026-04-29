'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const [isShowPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);


        if (error) {
            alert(`❌ Login Failed!

${error.message}

👉 Please check your email & password and try again.`);
        }

        if (res) {
            alert(`✅ Login Successful 🎉

Welcome back!

👉 Redirecting to homepage...`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Login your account</h1>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: true })}
                            className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">Email is required</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Password
                        </label>

                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password", { required: true, minLength: 6 })}
                            className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <span
                            onClick={() => setShowPassword(!isShowPassword)}
                            className="absolute right-4 top-[42px] cursor-pointer"
                        >
                            {isShowPassword ? <FaEye /> :  <FaEyeSlash />}
                        </span>

                        {errors.password?.type === "required" && (
                            <p className="text-red-500 text-sm mt-1">Password is required</p>
                        )}

                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500 text-sm mt-1">Minimum 6 characters</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3.5 rounded-2xl transition-all duration-200"
                    >
                        Login
                    </button>

                    {/* Register Link */}
                    <div className="text-center text-sm text-gray-600 mt-6">
                        Don&apos;t Have An Account?{" "}
                        <Link
                            href="/register"
                            className="text-red-500 hover:text-red-600 font-medium"
                        >
                            Register
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;