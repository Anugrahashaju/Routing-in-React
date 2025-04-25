import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="backdrop-blur-xl bg-transparent px-6 py-4 flex justify-between items-center  bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100 px-4 ">
      <Link to="/" className="text-2xl font-extrabold text-purple-700 drop-shadow-sm">
        EasyLog
      </Link>
      <div className="space-x-4">
        <Link
          to="home"
          className="text-purple-900 hover:text-pink-600 font-medium transition duration-300"
        >
          Home
        </Link>
        <Link
          to="products"
          className="text-purple-900 hover:text-pink-600 font-medium transition duration-300"
        >
          Products 
        </Link>
        <Link
          to="login"
          className="bg-purple-500/80 text-white px-4 py-2 rounded-xl hover:bg-purple-600/90 transition font-semibold shadow-md"
        >
          Login
        </Link>
        <Link
          to="signup"
          className="bg-white/30 text-pink-600 px-4 py-2 rounded-xl border border-pink-300 hover:bg-white/50 hover:text-pink-700 transition font-semibold shadow-sm"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
