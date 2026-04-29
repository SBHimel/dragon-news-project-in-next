import React from "react";

const Loading = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-10 px-4">

            {/* Left Sidebar Skeleton */}
            <div className="md:col-span-3 space-y-3 animate-pulse">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
            </div>

            {/* News Content Skeleton */}
            <div className="md:col-span-6 space-y-4">

                <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>

                {[1, 2, 3, 4, 5].map((item) => (
                    <div
                        key={item}
                        className="p-6 border rounded-xl space-y-3 animate-pulse"
                    >
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar Skeleton */}
            <div className="md:col-span-3 space-y-3 animate-pulse">
                <div className="h-40 bg-gray-200 rounded"></div>
                <div className="h-40 bg-gray-200 rounded"></div>
            </div>

        </div>
    );
};

export default Loading;