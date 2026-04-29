import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import swimming from '@/assets/swimming.png';
import classs from '@/assets/class.png';
import playground from '@/assets/playground.png';
import bg from '@/assets/bg.png';
import Image from 'next/image';

const RightSidebar = () => {
    return (
        <div className="w-80 bg-white rounded-2xl shadow border border-gray-200 overflow-hidden h-fit">

            {/* Login Section */}
            <div className="p-6 border-b border-gray-200">
                <h2 className="font-bold text-xl text-gray-800 mb-5">Login With</h2>
                
                <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow">
                        <FaGoogle className="text-blue-500 text-xl" />
                        <span className='text-blue-500'>Login with Google</span>
                    </button>

                    <button className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow">
                        <FaGithub className="text-gray-900 text-xl" />
                        <span>Login with Github</span>
                    </button>
                </div>
            </div>

            {/* Find Us On Section */}
            <div className="p-6 border-b border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Find Us On</h3>
                
                <div className="flex flex-col gap-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <FaFacebook size={18} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">Facebook</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center">
                            <FaTwitter size={18} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-sky-500">Twitter</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center">
                            <FaInstagram size={18} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-pink-500">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-Zone Section */}
            <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-5">Q-Zone</h3>
                
                <div className="space-y-6">

                    {/* Swimming */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-3">
                            <Image
                                src={swimming} 
                                alt="Swimming" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                width={300}
                                height={192}
                            />
                        </div>
                        <p className="text-center font-medium text-gray-700">Swimming</p>
                    </div>

                    {/* Class */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-3">
                            <Image 
                                src={classs} 
                                alt="Class" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                width={300}
                                height={192}
                            />
                        </div>
                        <p className="text-center font-medium text-gray-700">Class</p>
                    </div>

                    {/* Play Ground */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-3">
                            <Image
                                src={playground} 
                                alt="Play Ground" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                width={300}
                                height={192}
                            />
                        </div>
                        <p className="text-center font-medium text-gray-700">Play Ground</p>
                    </div>

                </div>
            </div>

            {/* Bottom Banner */}
            <div>
                <Image
                    src={bg} 
                    alt="Banner" 
                    className="w-full h-auto"
                    width={320}
                    height={200}
                />
            </div>

        </div>
    );
};

export default RightSidebar;