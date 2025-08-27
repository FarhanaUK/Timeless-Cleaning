import { Link } from "react-router-dom";

function BusinessName() {
  return (
    <div>
      <div className="mx-4 sm:mx-12 md:mx-24 mt-4">
        <Link
          to="/"
          aria-label="Timeless Cleaning homepage"
          className="cursor-pointer"
        >
          <h1
            className="flex justify-center text-6xl space-x-4 mt-16 mb-4 text-sky-500
        font-michroma"
          >
            Timeless Cleaning
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default BusinessName;
