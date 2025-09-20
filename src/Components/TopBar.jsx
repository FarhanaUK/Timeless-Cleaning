import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="w-full bg-white shadow-sm px-4 sm:px-8 md:px-12 py-3">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <Link
            to="/"
            aria-label="Timeless Cleaning homepage"
            className="cursor-pointer flex items-center mb-2 lg:mb-0"
          >
            <img
              src="/logo.PNG"
              alt="Timeless Cleaning Logo"
              className="h-16 sm:h-14 md:h-16 object-contain"
            />
            <div className="text-start lg:text-left mt-6">
              <h1 className="font-michroma text-sky-600 text-xl sm:text-2xl">
                Timeless
                <br />
                Cleaning
              </h1>

              <p className="text-gray-500 text-sm">
                Reliable, Affordable, Always Sparkling
              </p>
            </div>
          </Link>
        </div>

        <div className="flex justify-center sm:my-4 lg:my-0">
          <Nav />
        </div>

        <div className="flex justify-center lg:justify-end">
          <a
            className="font-michroma text-lg sm:text-sm md:text-xl hover:text-sky-70 flex items-center"
            href="tel:+447404809750"
            aria-label="Call Timeless Cleaning at 07404809750"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2sm:text-sm bg-slate-200 p-2 rounded-full text-sky-600"
              aria-hidden="true"
            />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
