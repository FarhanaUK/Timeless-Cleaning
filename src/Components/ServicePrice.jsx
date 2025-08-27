// ServicesPage.js
import React from "react";

const ServicesPage = () => {
  const services = [
    { name: "End of Tenancy Cleaning", price: "£120" },
    { name: "Domestic Cleaning", price: "£25/hr" },
    { name: "Regular Cleaning London", price: "£22/hr" },
    { name: "One-Off Cleaning", price: "£30/hr" },
    { name: "Deep Cleaning", price: "£35/hr" },
    { name: "Carpet Cleaning", price: "£50/room" },
    { name: "Upholstery Cleaning London", price: "£40/item" },
    { name: "After Builders Cleaning", price: "£150" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Our Services & Pricing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              {service.name}
            </h3>
            <p className="text-xl font-bold text-gray-800">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
