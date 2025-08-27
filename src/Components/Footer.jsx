import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-michroma">Timeless Cleaning</h2>
          <p className="text-gray-300 text-sm">
            Professional home and office cleaning across London. Reliable,
            eco-friendly, and affordable services.
          </p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <Link
            to="/TermsAndConditions"
            className="block hover:text-blue-400 transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/PrivacyPolicy"
            className="block hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/FAQS"
            className="block hover:text-blue-400 transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/Contact"
            className="block hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/bespokewebengineers/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574489914626"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Bespoke Web Engineers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
