'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // { email: "...", password: "..." }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Login your account</h1>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

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
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true, minLength: 6 })}
                            className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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