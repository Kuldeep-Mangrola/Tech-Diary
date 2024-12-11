import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white relative">
      {/* Angled Divider */}
      <div className="absolute top-0 left-0 w-full h-16 -translate-y-1/2">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon fill="#4B5563" points="0,100 100,0 100,100" />
        </svg>
      </div>

      {/* Upper Section */}
      <div className="bg-gray-700">
        <div className="container mx-auto px-6 lg:px-20 py-10">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold">Logo</h1>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Phone: +123 456 7890<br />
                Email: example@example.com<br />
                Website: www.example.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-6 lg:px-20 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Link Sections */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Knowledge Base</li>
                <li>Help Desk</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Knowledge Base</li>
                <li>Help Support</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
