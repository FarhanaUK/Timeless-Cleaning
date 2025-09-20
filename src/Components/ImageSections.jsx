function ImageSections() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mt-12 py-12 bg-gray-200 px-4 sm:px-6">
        <img
          src="/before&after.png"
          alt="Before and after cleaning service in London"
          className="rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/3 h-auto object-cover"
        />
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-2xl text-gray-900 font-michroma font-bold">
            Professional Cleaning Services in London
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            From spotless homes to sparkling offices, we provide high-quality
            cleaning services in London, tailored to your needs. Our trusted
            team covers deep cleaning, regular maintenance, end-of-tenancy, and
            after-builders cleaning. With attention to detail and a passion for
            hygiene, we deliver results that leave your space fresh, welcoming,
            and beautifully clean.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-6 md:space-y-0 md:space-x-10 py-12 bg-gray-200 px-4 sm:px-6">
        <img
          src="cleaningteam.png"
          alt="Professional cleaning team providing services in London"
          className="rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/3 h-auto object-cover"
        />
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-2xl text-gray-900 font-michroma font-bold">
            Reliable and Trustworthy Cleaners You Can Count On
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Your safety and satisfaction are our top priorities. We use safe
            products and proven cleaning methods to protect your property,
            family, and staff. Our team is fully trained, detail-focused, and
            committed to exceeding expectations every time. With us, you’ll get
            a professional service you can rely on. Clean spaces and stress-free
            results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSections;
