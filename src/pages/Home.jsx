import React from 'react';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col">

      <main className="flex-grow flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">
        {/* Hero Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Start Your Journey <br /> with <span className="text-indigo-600">EasyLog</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Sign up or log in to explore features and manage your profile seamlessly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate('/login')}
              className="bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-xl font-semibold hover:bg-indigo-50 transition"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://illustrations.popsy.co/fuchsia/online-shopping.svg"
            alt="Welcome Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
