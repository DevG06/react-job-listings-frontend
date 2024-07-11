import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <FaExclamationTriangle className="text-yellow-400 text-8xl mb-4 mx-auto" />
                <h1 className="text-9xl font-bold text-gray-800 mt-4">404</h1>
                <p className="text-2xl font-medium text-gray-600 mt-4">Page Not Found</p>
                <p className="text-lg text-gray-500 mt-2">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
