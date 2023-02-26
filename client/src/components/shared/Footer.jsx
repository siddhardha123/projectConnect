import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 mt-60 ">
      <div className="container mx-auto px-8 py-8 sm:flex sm:flex-wrap sm:justify-between">
        {/* Column 1 */}
        <div className="text-justify sm:w-1/4 h-auto mb-4 sm:mb-0">
          <h3 className="text-white font-medium mb-4">socials</h3>
          
        </div>
        {/* Column 2 */}
        <div className="sm:w-1/4 h-auto mb-4 sm:mb-0">
          <h3 className="text-white font-medium mb-4">Contact Us</h3>
          <ul className="text-gray-400 leading-loose">
            <li>1234 Main St</li>
            <li>Springfield, IL 62701</li>
            <li>(123) 456-7890</li>
            <li>info@example.com</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="sm:w-1/4 h-auto mb-4 sm:mb-0">
          <h3 className="text-white font-medium mb-4">Links</h3>
          <ul className="text-gray-400 leading-loose">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="sm:w-1/4 h-auto mb-4 sm:mb-0">
          <h3 className="text-white font-medium mb-4">Subscribe</h3>
          <form>
            <input
              type="email"
              className="bg-gray-800 rounded py-2 px-4 text-gray-100 w-full mb-2"
              placeholder="Email Address"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 rounded text-gray-100 py-2 px-4 w-full"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm text-center">
            © 2023 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
