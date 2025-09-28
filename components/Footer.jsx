import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MrtSports</h2>
          <p className="text-sm">
            Your one-stop shop for sports gear, shoes, and fitness essentials.
            Quality products, fast delivery, and best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="/returns" className="hover:text-white transition">Returns & Refunds</a></li>
            <li><a href="/shipping" className="hover:text-white transition">Shipping Policy</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Join Our Newsletter</h3>
          <p className="text-sm mb-3">Get the latest deals and updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 mt-8 text-sm">
        © {new Date().getFullYear()} MrtSports. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
