function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">
          About Timeless Cleaning
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Timeless Cleaning is your trusted partner for keeping homes and
          businesses spotless. After several years of providing exceptional
          cleaning services, we are excited to start fresh and bring our
          expertise back to the community.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock5.jpg"
            alt="Mission"
            className="w-46 h-46 object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2 text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            Our mission is simple: to provide reliable, thorough, and friendly
            cleaning services that make every space feel fresh and welcoming. We
            take the stress out of cleaning so our clients can focus on what
            matters most.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock4.jpg"
            alt="Difference"
            className="w-46 h-46 object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2 text-blue-600">
            What Makes Us Different
          </h2>
          <p className="text-gray-700 text-lg">
            We combine years of experience with a personal touch. Residential or
            commercial, we treat every property with care and attention to
            detail. Our friendly team, flexible scheduling, and commitment to
            quality ensure your space is not just clean, but truly refreshed.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700">
          Whether you need a regular cleaning, a one-time deep clean, or
          specialized services, Timeless Cleaning is here to make your space
          shine.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
