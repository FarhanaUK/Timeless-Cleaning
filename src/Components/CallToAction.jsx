function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg p-6">
      <h1 className="flex justify-center font-bold text-4xl mt-6 font-michroma text-orange-500">
        Free Consultation
      </h1>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Unsure which cleaning service you need? Get in touch today for a free,
        no-obligation consultation. We’ll assess your requirements and recommend
        the best solution to leave your home or workplace sparkling clean.
        Simple, reliable, and tailored to you.
      </p>
      <a
        className="font-michroma text-2xl text-orange-500 mt-6 my-6"
        href="tel:+447305959517"
      >
        <strong>Call Now: 07305 959 517</strong>
      </a>
    </div>
  );
}

export default CallToAction;
