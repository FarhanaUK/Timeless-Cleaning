function FAQs() {
  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We currently provide cleaning services across London and surrounding areas. Please contact us to confirm if we cover your location.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No, our cleaners bring their own professional-grade products and equipment. If you prefer us to use your supplies, just let us know.",
    },
    {
      question: "Are your cleaners insured?",
      answer:
        "Yes. All our cleaners are fully vetted and insured for your peace of mind.",
    },
    {
      question: "How do I book a cleaning?",
      answer:
        "You can book online via phone or email/contact form to schedule an appointment.",
    },
    {
      question: "What if I need to reschedule or cancel?",
      answer:
        "Please give us at least 24 hours' notice to reschedule or cancel without a charge. Short-notice cancellations may incur a fee.",
    },
    {
      question: "How do I pay for services?",
      answer:
        "Payments can be made securely online via card or through other approved methods agreed in advance.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-stone-800 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-michroma text-stone-800">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Got questions? We’ve got answers.
          </p>
        </header>

        <section className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-none"
            >
              <h2 className="text-lg font-michroma text-stone-700">
                {faq.question}
              </h2>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </section>

        <p className="mt-10 text-xs text-gray-400 text-center">
          Didn’t find what you were looking for? Contact us and we’ll be happy
          to help.
        </p>
      </div>
    </main>
  );
}

export default FAQs;
