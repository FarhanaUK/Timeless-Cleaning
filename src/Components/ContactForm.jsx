import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value: val } = e.target;
    setValue((prev) => ({ ...prev, [name]: val }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, value, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowSuccess(true);
        setResult("Thank you! We received your message.");
        setValue({ name: "", email: "", message: "" }); // reset form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setResult("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative">
      <h1 className="font-semibold text-4xl font-michroma">Get in Touch</h1>
      <p className="text-gray-700">
        Have a question, or just want to say hi? We'd love to hear from you!
      </p>

      <div className="pr-6">
        <a className="font-michroma text-2xl p-6" href="tel:+447377156973">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Call us directly at 07377 156 973
        </a>
      </div>

      {showSuccess && (
        <div className="absolute top-10 bg-white border border-[#26B7FF] rounded-lg shadow-lg p-6 w-80 text-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-green-600 text-4xl">✔</span>
            <p className="font-bold text-lg text-green-700">Success</p>
            <p className="text-gray-700">Message sent successfully.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 bg-[#26B7FF] text-white rounded hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 w-full max-w-xl border p-6 rounded-lg shadow-lg bg-slate-100">
        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="font-semibold mb-2">
            Name
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
              className="border mb-6 w-full font-normal p-2 bg-white"
            />
          </label>

          <label className="font-semibold mb-2">
            Email
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
              className="border mb-6 w-full font-normal p-2 bg-white"
            />
          </label>

          <label className="font-semibold mb-2">
            Message
            <textarea
              name="message"
              value={value.message}
              onChange={handleChange}
              rows="4"
              required
              className="border mb-6 w-full font-normal p-2 bg-white"
            />
          </label>

          <button className="font-michroma border p-2 rounded-lg bg-black text-white">
            Send Message
          </button>
        </form>

        {result && <p className="mt-4 text-gray-600 font-medium">{result}</p>}

        <p className="py-4 text-gray-500">
          Prefer to write? Send us an email and we'll get back to you fast:{" "}
          <a
            href="mailto:Timelesscleaning@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Timelesscleaning@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
