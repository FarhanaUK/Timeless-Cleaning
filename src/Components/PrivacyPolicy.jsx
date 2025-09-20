function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-stone-800 px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
        <header className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-michroma text-stone-800">
            Privacy Policy
          </h1>
        </header>

        <section className="prose prose-sm sm:prose-base md:prose prose-stone max-w-none">
          <p>
            Timeless Cleaners (“we”, “our”, “us”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you use our services or website.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <strong>Personal details</strong> — such as your name, email,
              phone number, and address when you book services.
            </li>
            <li>
              <strong>Payment information</strong> — processed securely via
              third-party providers (we do not store card details).
            </li>
            <li>
              <strong>Service details</strong> — including booking history and
              property access instructions.
            </li>
            <li>
              <strong>Website data</strong> — cookies, IP address, and browsing
              behaviour (if applicable).
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your data for purposes including:</p>
          <ul>
            <li>To provide and manage cleaning services.</li>
            <li>To process payments and send booking confirmations.</li>
            <li>
              To communicate with you regarding appointments, updates, or
              support.
            </li>
            <li>To improve our website and services.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information. We may share your
            data only with:
          </p>
          <ul>
            <li>
              Trusted service providers (e.g., payment processors, email
              systems).
            </li>
            <li>Law enforcement or regulators if required by law.</li>
          </ul>

          <h2>4. Data Storage & Security</h2>
          <p>
            We take reasonable measures to protect your data against loss,
            theft, or misuse. Your personal data will only be stored as long as
            necessary to provide services or comply with legal obligations.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to inaccurate data.</li>
            <li>
              Request deletion of your data (subject to legal or contractual
              obligations).
            </li>
            <li>Withdraw consent for marketing communications.</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to improve user experience. You can
            manage or disable cookies through your browser settings.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on our website with the updated
            date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or requests, contact Timeless Cleaners:
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Email:{" "}
            <a
              href="mailto:info@timelesscleaning.co.uk"
              className="text-blue-600 hover:underline break-words"
            >
              info@timelesscleaning.co.uk
            </a>
            <br />
            Phone:{" "}
            <a href="tel:07404809750" className="text-blue-600 hover:underline">
              07404 809 750
            </a>
          </p>

          <p className="mt-6 text-xs sm:text-sm text-gray-400">
            Note: This Privacy Policy is a simple template for clarity. For full
            compliance (e.g., GDPR in the UK/EU), consult a legal professional.
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
