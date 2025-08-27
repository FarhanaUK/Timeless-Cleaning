function ServicePrice() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-michroma">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Timeless Cleaning provides professional home cleaning services across
          London. Choose from our flat cleaning packages, deep cleans, or
          individual services.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-michroma text-blue-600 mb-4">
          Flat Cleaning Packages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Studio Flat</h3>
            <p>
              No oven: £140 | 3 hours, 1 cleaner (or 2 cleaners 1.5 hrs each)
            </p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven, hob & extractor: £170</p>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">1 Bed Flat</h3>
            <p>No oven: £165 | 4 hours, 1 cleaner (or 2 cleaners 2 hrs each)</p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven: £185 | 5 hours (or 2 cleaners 2.5 hrs each)</p>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">
              2 Bed Flat (1 Bathroom)
            </h3>
            <p>No oven: £185 | 5 hours (or 2 cleaners 2.5 hrs each)</p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven: £225 | 6 hours (or 2 cleaners 3 hrs each)</p>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">3 Bed, 1 Bath</h3>
            <p>No oven: £225 | 6 hours (or 2 cleaners 3 hrs each)</p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven: £275 | 2 cleaners 3.5 hrs each</p>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">3 Bed, 2 Bath</h3>
            <p>No oven: £235 | 2 cleaners 3.5 hrs</p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven: £290 | 2 cleaners 4 hrs each</p>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">4 Bed, 1 Bath</h3>
            <p>No oven: £360 | 2 cleaners 4.5 hrs each</p>
            <p className="font-bold mt-2">Discount Deal:</p>
            <p>With oven: £420 | 2 cleaners 5 hrs each</p>
            <p className="text-sm mt-2 text-gray-600">
              5+ bed? Contact us for a custom quote.
            </p>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-michroma text-yellow-700 mb-2">
          Same Day Jobs
        </h2>
        <p>
          Additional charge: £75-£100. Jobs may incur a higher charge depending
          on complexity.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          A percentage of this extra charge is paid back to the cleaner as a
          bonus.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-michroma text-blue-600 mb-2">
          Individual Cleaning Quotes
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg shadow bg-white">
            Kitchen Deep Clean: £80
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Living Room Deep Clean: £40
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Bathroom Deep Clean: £55
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Toilet Deep Clean: £25
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Bedroom Deep Clean: £40
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Garage: £50
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Conservatory: £45
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Single Oven: £55
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Double Oven: £79
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Range Oven: £135
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Hob: £12.50
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Extractor: £25
          </div>
          <div className="border p-4 rounded-lg shadow bg-white">
            Fridge: £10
          </div>
        </div>
      </div>

      <div className="text-center bg-green-50 p-6 rounded-xl shadow-md">
        <p className="font-semibold text-lg">
          Minimum booking fee: £120 (up to 3 hours)
        </p>
      </div>
    </div>
  );
}

export default ServicePrice;
