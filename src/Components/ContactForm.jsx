import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value: val } = e.target;
    setValue((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = {
      name: value.name,
      email: value.email,
      message: value.message,
      access_key: import.meta.env.VITE_WEB3FORM_ACCESS_KEY, // Your Web3Forms key
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        setResult("Thank you! We received your message.");
        setValue({ name: "", email: "", message: "" });
      } else {
        setResult("Oops! Something went wrong. Please try again.");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      setResult("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative">
      <h1 className="font-semibold text-4xl font-michroma">Get in Touch</h1>
      <p className="text-gray-700">
        Have a question, or just want to say hi? We'd love to hear from you!
      </p>

      <div className="pr-6">
        <a className="font-michroma text-2xl p-6" href="tel:+447305959517">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Call us directly at 07305 959 517
        </a>
      </div>

      {showSuccess && (
        <div className="absolute top-10 bg-white border border-green-700 rounded-lg shadow-lg p-6 w-80 text-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-green-600 text-4xl">✔</span>
            <p className="font-bold text-lg text-green-700">Success</p>
            <p className="text-gray-700">Message sent successfully.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 w-full max-w-xl border p-6 rounded-lg shadow-lg bg-slate-100">
        <form onSubmit={handleSubmit} className="flex flex-col">
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

          <button
            type="submit"
            className="
              font-michroma 
              border p-2 rounded-lg
              bg-green-600 
              text-white 
              px-6 py-3 
              shadow-md 
              active:shadow-sm 
              active:translate-y-1 
              transition-all 
              duration-100
              disabled:opacity-50
            "
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {loading && (
            <div className="mt-4 border-4 border-green-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
          )}
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
