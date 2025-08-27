function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 text-stone-800 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-michroma text-stone-800">
            Terms & Conditions
          </h1>
        </header>

        <section className="prose prose-stone max-w-none">
          <p>
            Welcome to <strong>Timeless Cleaners</strong>. By booking our
            services you agree to these Terms & Conditions. Please read them
            carefully.
          </p>

          <h2>1. Services Provided</h2>
          <p>
            Timeless Cleaners offers professional cleaning services for
            residential and commercial properties. The exact scope of services
            will be confirmed at the time of booking.
          </p>

          <h2>2. Bookings & Appointments</h2>
          <ul>
            <li>
              All bookings must be made in advance via our website, phone, or
              email.
            </li>
            <li>Appointment times are subject to availability.</li>
            <li>
              Customers must provide accurate access details to the property.
            </li>
          </ul>

          <h2>3. Pricing & Payment</h2>
          <p>
            Prices are listed on our website or provided in your booking
            confirmation. Payment must be made in full before or on the day of
            service unless otherwise agreed. We accept card payments, bank
            transfers, and online payment methods.
          </p>

          <h2>4. Cancellations & Rescheduling</h2>
          <ul>
            <li>
              Cancellations more than <strong>24 hours</strong> in advance will
              not be charged.
            </li>
            <li>
              Cancellations within <strong>24 hours</strong> may be charged in
              full.
            </li>
            <li>
              Rescheduling: please notify us as early as possible to avoid
              charges.
            </li>
          </ul>

          <h2>5. Customer Responsibilities</h2>
          <p>
            Customers must ensure safe access to the property, secure valuables,
            and disclose any health or safety risks prior to the appointment.
          </p>

          <h2>6. Timeless Cleaners’ Responsibilities</h2>
          <p>
            We aim to provide high-quality, professional cleaning services. If
            you are unsatisfied, contact us within <strong>24 hours</strong> and
            we will review the issue. We are insured for accidental damage
            caused by our cleaners during service.
          </p>

          <h2>7. Liability</h2>
          <p>
            Timeless Cleaners is not liable for pre-existing damage, normal wear
            and tear, or items of high sentimental value that were not disclosed
            in advance. We are not responsible for delays caused by events
            outside our control.
          </p>

          <h2>8. Health & Safety</h2>
          <p>
            Our staff follows strict health & safety procedures. We reserve the
            right to refuse or stop work if conditions are unsafe or present a
            hazard.
          </p>

          <h2>9. Termination of Services</h2>
          <p>
            We may cancel or refuse service if the property is unsafe, payments
            are not made as agreed, or staff face abuse or unreasonable
            behaviour.
          </p>

          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of the United Kingdom.</p>

          <h2>Contact Us</h2>
          <p>Questions or concerns — contact Timeless Cleaners:</p>
          <p className="text-sm text-gray-700">
            Email:{" "}
            <a
              href="mailto:service.timelesscleaning@gmail.com"
              className="text-blue-600 hover:underline"
            >
              service.timelesscleaning@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:07305959517" className="text-blue-600 hover:underline">
              07305-959-517
            </a>
          </p>

          <p className="mt-6 text-xs text-gray-400">
            Note: This document is a clear, user-friendly template. It is not
            legal advice — consider getting a solicitor to review for specific
            legal protection.
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsAndConditions;
