"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NoNewsFound = () => {
    const router = useRouter();

    return (
        <div className="relative flex flex-col items-center justify-center text-center 
                        py-16 sm:py-20 md:py-24 px-4 overflow-hidden">

            {/* Glow Background */}
            <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 
                           bg-purple-200 rounded-full blur-3xl opacity-40"
            />

            {/* Icon */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl mb-4 z-10"
            >
                🐉
            </motion.div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 z-10"
            >
                No News Found
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-gray-500 mt-3 max-w-xs sm:max-w-md z-10"
            >
                এই ক্যাটাগরিতে আপাতত কোনো নিউজ নেই 😔 <br />
                নতুন আপডেট খুব শিগগিরই আসছে!
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto z-10"
            >

                {/* Home Button */}
                <button
                    onClick={() => router.push("/")}
                    className="w-full sm:w-auto bg-purple-600 text-white 
                               px-5 py-2 rounded-md shadow-md 
                               hover:bg-purple-700 transition"
                >
                    🏠 Go Home
                </button>

                {/* Refresh Button */}
                <button
                    onClick={() => window.location.reload()}
                    className="w-full sm:w-auto border border-purple-500 text-purple-600 
                               px-5 py-2 rounded-md 
                               hover:bg-purple-100 transition"
                >
                    🔄 Refresh
                </button>

            </motion.div>

        </div>
    );
};

export default NoNewsFound;