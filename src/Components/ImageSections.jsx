function ImageSections() {
  return (
    <div>
      {/* First Image and Text Block */}
      <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 mt-12 bg-gray-200">
        <img
          src="/before&after.png"
          className="mt-2 mb-2 rounded-lg shadow-lg w-2/5 md:w-1/3 h-auto object-cover"
        />
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h1 className="text-2xl text-gray-900 font-michroma font-bold">
            Professional Cleaning Services in London
          </h1>
          <p className="text-lg text-gray-700">
            From spotless homes to sparkling offices, we provide high-quality
            cleaning tailored to your needs. Our trusted team covers everything
            from deep cleans and regular maintenance to end-of-tenancy and
            after-builders cleaning. With attention to detail and a passion for
            hygiene, we deliver results that leave your space fresh, welcoming,
            and beautifully clean.
          </p>
        </div>
      </div>

      {/* Second Image and Text Block with Image on Right */}
      <div className="flex justify-center items-center flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-12 mb-12 bg-gray-200">
        <img
          src="cleaningteam.png"
          className="mt-2 mb-2 rounded-lg shadow-lg w-2/5 md:w-1/4 h-auto object-cover"
        />
        <div className="text-center md:text-left max-w-xl space-y-4 pr-6">
          <h1 className="text-2xl text-gray-900 font-michroma font-bold">
            Reliable, Safe & Eco-Friendly
          </h1>
          <p className="text-lg text-gray-700">
            Your safety and satisfaction are our top priorities. We use safe,
            eco-friendly products and proven cleaning methods to protect your
            property, family, and staff. Our team is fully trained,
            detail-focused, and committed to exceeding expectations every time.
            With us, you’ll get a professional service you can rely on. Clean
            spaces and stress-free results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSections;
