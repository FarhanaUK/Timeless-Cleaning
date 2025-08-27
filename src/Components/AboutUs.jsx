function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-michroma text-blue-500">
          Keeping Your Space Spotless
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Reliable, thorough, and friendly cleaning services that make every
          home or office feel fresh and welcoming.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock5.jpg"
            alt="Mission"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma text-blue-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            We provide reliable, thorough, and friendly cleaning services that
            make every space feel fresh and welcoming. We take the stress out of
            cleaning so you can focus on what matters most.
          </p>
        </div>
      </div>

      {/* Difference Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock4.jpg"
            alt="Difference"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma text-blue-600 mb-3">
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

      {/* Closing Section */}
      <div className="text-center">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you need a regular cleaning, a one-time deep clean, or
          specialized services, our team is here to make your space shine.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
