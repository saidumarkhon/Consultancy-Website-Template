import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-fit">
      <div className="contact-email bg-primary-color w-full flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Stay Update!!!
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-6 bg-[#1e2a3b] text-white rounded-lg hover:bg-[#2a3b4f] transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="footer">
        <footer className="bg-secondary-color text-white pt-10 pb-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Our Services",
                  "Latest Blog Post",
                  "Contact Us",
                ].map((link) => (
                  <li key={link} className="flex items-center space-x-2">
                    <span className="text-red-500">&rarr;</span>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Popular Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Our Services",
                  "Latest Blog Post",
                  "Contact Us",
                ].map((link) => (
                  <li key={link} className="flex items-center space-x-2">
                    <span className="text-red-500">&rarr;</span>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <MapPin className="text-red-500" />
                  <span>123 Street, New York, USA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="text-red-500" />
                  <span>info@example.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="text-red-500" />
                  <span>+012 345 67890</span>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition"
                >
                  <Twitter className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition"
                >
                  <Facebook className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition"
                >
                  <Linkedin className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition"
                >
                  <Instagram className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm md:text-base text-gray-400">
            © Your Site Name. All Rights Reserved. Designed by HTML Codex
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
