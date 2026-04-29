import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center space-y-4">
                
                {/* Spinner */}
                <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>

                {/* Text */}
                <p className="text-gray-600 font-medium">
                    Loading news...
                </p>

            </div>
        </div>
    );
};

export default LoadingPage;