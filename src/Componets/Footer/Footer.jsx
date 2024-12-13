// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start animate-fade-in">
          {/* Logo and Tagline */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-yellow-500 mb-3">Tech Diary</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing machinery rentals with simplicity and efficiency. Your success, our priority.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Explore</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#about" className="text-yellow-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#features" className="text-yellow-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="#pricing" className="text-yellow-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="#testimonials" className="text-yellow-400 hover:text-white transition duration-300">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">Email: support@techdiary.com</p>
            <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
            <p className="text-gray-400 text-sm">Address: 123 Innovation Drive, Tech City</p>
          </div>

          {/* Social Media and Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Stay Connected</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <form>
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-yellow-500 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-500 text-sm animate-slide-up">
          &copy; {new Date().getFullYear()} Tech Diary. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;