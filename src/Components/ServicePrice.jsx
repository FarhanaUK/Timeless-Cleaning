function ServicePrice() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-michroma">
          Our Services
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Timeless Cleaning provides professional home cleaning services across
          London. Choose from our flat cleaning packages, deep cleans, or
          individual services.
        </p>
      </div>

      {/* Flat Cleaning Packages */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-michroma text-blue-600 mb-4">
          Flat Cleaning Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Studio Flat",
              noOven: "£140 | 3 hours, 1 cleaner",
              discount:
                "With oven, £170 | 4 hours, 1 cleaner (or 2 cleaners 2 hrs each)",
            },
            {
              title: "1 Bed Flat",
              noOven: "£165 | 4 hours, 1 cleaner (or 2 cleaners 2 hrs each)",
              discount:
                "With oven: £185 | 5 hours (or 2 cleaners 2.5 hrs each)",
            },
            {
              title: "2 Bed Flat (1 Bathroom)",
              noOven: "£185 | 5 hours (or 2 cleaners 2.5 hrs each)",
              discount: "With oven: £225 | 6 hours (or 2 cleaners 3 hrs each)",
            },
            {
              title: "3 Bed, 1 Bath",
              noOven: "£225 | 6 hours (or 2 cleaners 3 hrs each)",
              discount: "With oven: £275 | 2 cleaners 3.5 hrs each",
            },
            {
              title: "3 Bed, 2 Bath",
              noOven: "£235 | 2 cleaners 3.5 hrs",
              discount: "With oven: £290 | 2 cleaners 4 hrs each",
            },
            {
              title: "4 Bed, 1 Bath",
              noOven: "£360 | 2 cleaners 4.5 hrs each",
              discount: "With oven: £420 | 2 cleaners 5 hrs each",
              note: "5+ bed? Contact us for a custom quote.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="border p-4 sm:p-6 rounded-xl shadow-lg bg-white"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base">{service.noOven}</p>
              <p className="font-bold mt-2">Discount Deal:</p>
              <p className="text-sm sm:text-base">{service.discount}</p>
              {service.note && (
                <p className="text-xs sm:text-sm mt-1 text-gray-600">
                  {service.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Same Day Jobs */}
      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-michroma text-yellow-700 mb-2">
          Same Day Jobs
        </h2>
        <p className="text-sm sm:text-base">
          Additional charge: £75-£100. Jobs may incur a higher charge depending
          on complexity.
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          A percentage of this extra charge is paid back to the cleaner as a
          bonus.
        </p>
      </div>

      {/* Individual Cleaning Quotes */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-michroma text-blue-600 mb-2">
          Individual Cleaning Quotes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Kitchen Deep Clean: £80",
            "Living Room Deep Clean: £40",
            "Bathroom Deep Clean: £55",
            "Toilet Deep Clean: £25",
            "Bedroom Deep Clean: £40",
            "Garage: £50",
            "Conservatory: £45",
            "Single Oven: £55",
            "Double Oven: £79",
            "Range Oven: £135",
            "Hob: £12.50",
            "Extractor: £25",
            "Fridge: £10",
          ].map((item, idx) => (
            <div
              key={idx}
              className="border p-3 sm:p-4 rounded-lg shadow bg-white text-sm sm:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Minimum Booking Fee */}
      <div className="text-center bg-green-50 p-4 sm:p-6 rounded-xl shadow-md">
        <p className="font-semibold text-base sm:text-lg">
          Minimum booking fee: £120 (up to 3 hours)
        </p>
      </div>
    </div>
  );
}

export default ServicePrice;
