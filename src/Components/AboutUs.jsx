function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-michroma">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Timeless Cleaning – Where Quality Meets Trust. Reliable, thorough, and
          eco-friendly cleaning services for homes and offices across London.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock4.jpg"
            alt="Our Commitment"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma mb-3">Our Commitment to You</h2>
          <p className="text-gray-700 text-lg">
            Every home and office is unique, and we take the time to understand
            your needs. From regular cleaning to deep carpet cleaning and
            end-of-tenancy services, no job is too big or small. Our trained and
            background-checked team ensures your property is in safe, capable
            hands. We don’t just clean; we transform spaces.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock3.jpg"
            alt="Exceptional Service"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma mb-3">
            Exceptional Service at Fair Prices
          </h2>
          <p className="text-gray-700 text-lg">
            We combine quality and affordability. From home cleaning and office
            services to professional carpet cleaning and end-of-tenancy
            cleaning, Timeless Cleaning provides cost-effective, reliable, and
            eco-friendly solutions.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock4.jpg"
            alt="Advanced Technology"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma mb-3">
            Advanced Cleaning Technology
          </h2>
          <p className="text-gray-700 text-lg">
            We use the latest cleaning technology to achieve outstanding results
            efficiently. Our professional equipment ensures deeper cleaning
            while using eco-friendly, non-toxic products safe for your family,
            employees, and the environment.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="stock3.jpg"
            alt="Professional Team"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-michroma mb-3">
            Professional Cleaning Team
          </h2>
          <p className="text-gray-700 text-lg">
            Our team is trained, background-checked, and passionate about
            providing exceptional service. Friendly, approachable, and
            detail-oriented, we ensure your space is spotless while treating
            every client with respect and professionalism.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you need regular home cleaning, office services, carpet care,
          or end-of-tenancy cleaning, Timeless Cleaning is your trusted partner
          for a spotless space.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
