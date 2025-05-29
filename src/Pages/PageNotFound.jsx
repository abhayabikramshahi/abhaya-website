// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found 😓</p>
      <Link to="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
