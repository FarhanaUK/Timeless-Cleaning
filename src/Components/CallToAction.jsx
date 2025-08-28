function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold font-michroma text-orange-500 text-center mt-4">
        Free Consultation
      </h1>
      <p className="text-base sm:text-lg md:text-lg text-gray-700 text-center max-w-xl">
        Unsure which cleaning service you need? Get in touch today for a free,
        no-obligation consultation. We’ll assess your requirements and recommend
        the best solution to leave your home or workplace sparkling clean.
        Simple, reliable, and tailored to you.
      </p>
      <a
        className="font-michroma text-lg sm:text-2xl text-orange-500 mt-4"
        href="tel:+447305959517"
      >
        <strong>Call Now: 07305 959 517</strong>
      </a>
    </div>
  );
}

export default CallToAction;
