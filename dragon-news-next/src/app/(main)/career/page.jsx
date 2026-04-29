"use client";

import React from "react";
import { motion } from "framer-motion";

const CareerPage = () => {
    const handleApply = () => {
        alert("ধন্যবাদ! 🎉 আমরা খুব শিগগিরই আবেদন ফর্ম চালু করব। আপডেটের জন্য সাথে থাকুন।");
    };
    return (
        <div className="max-w-5xl mx-auto px-4 py-14 text-gray-800">

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-purple-600">
                    Join Dragon News 🐉
                </h1>
                <p className="text-gray-600 mt-3">
                    Build your future with modern journalism & technology
                </p>
            </motion.div>

            {/* Why Join */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">

                {[
                    {
                        title: "🌍 Real Impact",
                        desc: "Your work reaches thousands of readers."
                    },
                    {
                        title: "🚀 Career Growth",
                        desc: "Learn modern web & media technologies."
                    },
                    {
                        title: "💡 Innovation",
                        desc: "We encourage creative thinking & ideas."
                    },
                    {
                        title: "🤝 Team Culture",
                        desc: "Friendly and collaborative environment."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-semibold text-purple-500 mb-2">
                            {item.title}
                        </h2>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}

            </div>

            {/* Open Positions */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    Open Positions
                </h2>

                <div className="space-y-4">

                    {[
                        {
                            title: "Frontend Developer (React/Next.js)",
                            desc: "Build modern UI for news platform."
                        },
                        {
                            title: "Content Writer",
                            desc: "Write engaging news articles."
                        },
                        {
                            title: "UI/UX Designer",
                            desc: "Design clean user interfaces."
                        }
                    ].map((job, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="p-5 border rounded-lg hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg">
                                {job.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {job.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </motion.div>

            {/* CTA */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="text-center bg-purple-50 p-10 rounded-xl"
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Ready to Join?
                </h2>
                <p className="text-gray-600 mb-4">
                    Start your journey with Dragon News today
                </p>

                <button onClick={handleApply} className="relative bg-purple-600 text-white px-6 py-2 rounded-md overflow-hidden group">
                    <span className="relative z-10">Apply Now</span>

                    <span className="absolute inset-0 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
                </button>
            </motion.div>

        </div>
    );
};

export default CareerPage;