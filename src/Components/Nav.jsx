import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full flex justify-center mt-4">
      {/* Desktop nav */}
      <div className="hidden md:flex text-gray-500 rounded-2xl px-8 py-3 space-x-10 shadow-lg">
        <Link to="/about-us" className="hover:text-gray-300 transition">
          ABOUT
        </Link>
        <Link to="/services" className="hover:text-gray-300 transition">
          SERVICES
        </Link>

        <Link to="/contact" className="hover:text-gray-300 transition">
          CONTACT
        </Link>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex justify-end items-start w-full relative p-4">
        <button onClick={toggleMenu} className="z-20 text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute right-4 top-14 bg-black/95 text-white p-4 space-y-4 rounded-2xl shadow-lg z-50"
          >
            <Link
              to="/about-us"
              onClick={closeMenu}
              className="block hover:text-gray-300 transition"
            >
              ABOUT
            </Link>
            <Link
              to="/ServicePrice"
              onClick={closeMenu}
              className="block hover:text-gray-300 transition"
            >
              SERVICES
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block hover:text-gray-300 transition"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
