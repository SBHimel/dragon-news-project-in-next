
'use client'
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-14 text-gray-800">

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h1 className="text-4xl font-bold text-purple-600">
                    About Dragon News 🐉
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                    Modern, Fast & Reliable News Platform
                </p>
            </motion.div>

            {/* Story */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-8 rounded-xl shadow-sm mb-10"
            >
                <h2 className="text-2xl font-semibold text-purple-500 mb-3">
                    Our Story
                </h2>
                <p>
                    Dragon News তৈরি করা হয়েছে মানুষের কাছে দ্রুত এবং নির্ভরযোগ্য তথ্য পৌঁছে দেওয়ার জন্য।
                </p>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-6 border rounded-xl hover:shadow-md transition"
                >
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">
                        🎯 Mission
                    </h3>
                    <p>
                        সঠিক তথ্য দ্রুত মানুষের কাছে পৌঁছে দেওয়া।
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-6 border rounded-xl hover:shadow-md transition"
                >
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">
                        🚀 Vision
                    </h3>
                    <p>
                        বাংলাদেশের #1 trusted news platform হওয়া।
                    </p>
                </motion.div>

            </div>

            {/* Features */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Why Dragon News?
                </h2>

                <ul className="space-y-3">
                    {[
                        "Fast & Updated News",
                        "Clean UI Experience",
                        "Mobile Friendly Design",
                        "Trusted Information",
                        "Built with Modern Tech"
                    ].map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            ✔ {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Closing */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center bg-purple-50 p-10 rounded-xl mt-12"
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Stay With Us 💜
                </h2>
                <p className="text-gray-600">
                    We are building the future of news experience.
                </p>
            </motion.div>

        </div>
    );
};

export default About;