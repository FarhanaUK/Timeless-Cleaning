function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-michroma">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
          Timeless Cleaning – Where Quality Meets Trust. Reliable, thorough, and
          eco-friendly cleaning services for homes and offices across London.
        </p>
      </div>

      {[
        // loop over items for cleaner code
        {
          img: "small1.png",
          alt: "Our Commitment",
          title: "Our Commitment to You",
          text: `Every home and office is unique, and we take the time to understand
                 your needs. From regular cleaning to deep carpet cleaning and
                 end-of-tenancy services, no job is too big or small. Our trained and
                 background-checked team ensures your property is in safe, capable
                 hands. We don’t just clean; we transform spaces.`,
          bg: "bg-blue-50",
        },
        {
          img: "small2.png",
          alt: "Exceptional Service",
          title: "Exceptional Service at Fair Prices",
          text: `We combine quality and affordability. From home cleaning and office
                 services to professional carpet cleaning and end-of-tenancy
                 cleaning, Timeless Cleaning provides cost-effective, reliable, and
                 eco-friendly solutions.`,
          bg: "bg-white",
        },
        {
          img: "small3.png",
          alt: "Professional Team",
          title: "Professional Cleaning Team",
          text: `Our team is trained, background-checked, and passionate about
                 providing exceptional service. Friendly, approachable, and
                 detail-oriented, we ensure your space is spotless while treating
                 every client with respect and professionalism.`,
          bg: "bg-white",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`${item.bg} rounded-xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0`}
        >
          <div className="flex-shrink-0">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-michroma mb-3">
              {item.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">{item.text}</p>
          </div>
        </div>
      ))}

      <div className="text-center">
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
          Whether you need regular home cleaning, office services, carpet care,
          or end-of-tenancy cleaning, Timeless Cleaning is your trusted partner
          for a spotless space.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
