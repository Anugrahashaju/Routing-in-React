import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-100 via-white to-gray-100 border-t mt-10">
  <div className="max-w-screen-xl mx-auto px-6 py-8 md:flex md:items-center md:justify-between text-gray-600">
    
    <div className="text-center md:text-left mb-4 md:mb-0">
      <p className="text-sm">&copy; {new Date().getFullYear()} <span className="font-semibold text-gray-800">EasyLog</span>. All rights reserved.</p>
    </div>
    
    <div className="flex justify-center space-x-6 text-sm">
      <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
      <a href="#" className="hover:text-blue-600 transition">Terms of Use</a>
      <a href="#" className="hover:text-blue-600 transition">Contact</a>
    </div>

    {/* Optional: Social Icons */}
    <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
      <a href="#" className="text-gray-500 hover:text-blue-600 transition">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 5.75a8.38 8.38 0 0 1-2.357.646A4.11 4.11 0 0 0 21.447 4a8.18 8.18 0 0 1-2.605.98A4.12 4.12 0 0 0 11.048 8.03a11.65 11.65 0 0 1-8.457-4.287A4.07 4.07 0 0 0 3.2 9.861a4.09 4.09 0 0 1-1.865-.515v.05a4.13 4.13 0 0 0 3.302 4.046 4.12 4.12 0 0 1-1.853.07 4.13 4.13 0 0 0 3.84 2.86A8.26 8.26 0 0 1 2 18.407a11.6 11.6 0 0 0 6.29 1.837c7.547 0 11.675-6.155 11.675-11.5 0-.175-.004-.35-.012-.524A8.18 8.18 0 0 0 22 5.75z" />
        </svg>
      </a>
      <a href="#" className="text-gray-500 hover:text-blue-600 transition">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3H4.385A1.38 1.38 0 0 0 3 4.385v15.23A1.38 1.38 0 0 0 4.385 21h15.23A1.38 1.38 0 0 0 21 19.615V4.385A1.38 1.38 0 0 0 19.615 3zM8.077 18H5.538V9h2.538v9zm-1.27-10.2a1.47 1.47 0 1 1 0-2.94 1.47 1.47 0 0 1 0 2.94zm11.193 10.2h-2.537v-4.616c0-1.1-.02-2.514-1.532-2.514-1.532 0-1.768 1.197-1.768 2.433V18h-2.537V9h2.434v1.233h.034c.34-.643 1.17-1.32 2.407-1.32 2.573 0 3.05 1.693 3.05 3.895V18z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
