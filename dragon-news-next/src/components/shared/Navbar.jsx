import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                
                {/* Left Side - Logo / Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">D</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dragon News</h1>
                        <p className="text-xs text-gray-500 -mt-1">Stay Informed</p>
                    </div>
                </div>

                {/* Center Navigation */}
                <ul className="hidden md:flex items-center gap-3 text-gray-700 font-medium">
                    <li>
                        <NavLink href="/" className="hover:text-purple-600 transition-colors">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about-us" className="hover:text-purple-600 transition-colors">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/career" className="hover:text-purple-600 transition-colors">
                            Career
                        </NavLink>
                    </li>
                </ul>

                {/* Right Side - User & Login */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Image 
                            src={userAvatar} 
                            alt="User Avatar" 
                            width={40} 
                            height={40}
                            className="rounded-full border border-gray-200"
                        />
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium text-gray-700">S.B. Himel</p>
                            <p className="text-xs text-gray-500 -mt-0.5">Welcome back</p>
                        </div>
                    </div>

                    <Link href="/login">
                        <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                            Login
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;