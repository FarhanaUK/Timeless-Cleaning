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
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
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
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 max-w-4xl mx-auto space-y-6 relative">
      <h1 className="text-3xl sm:text-4xl font-michroma font-semibold text-center">
        Get in Touch
      </h1>
      <p className="text-gray-700 text-center">
        Have a question, or just want to say hi? We'd love to hear from you!
      </p>

      {showSuccess && (
        <div className="fixed top-20 sm:top-32 left-1/2 transform -translate-x-1/2 bg-white border border-green-700 rounded-lg shadow-lg p-6 w-11/12 sm:w-80 text-center z-50">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-green-600 text-4xl">✔</span>
            <p className="font-bold text-lg text-green-700">Success</p>
            <p className="text-gray-700 text-sm sm:text-base">
              Message sent successfully.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-xl p-6 rounded-lg shadow-lg bg-slate-100">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
              className="mt-2 p-2 border rounded w-full bg-white"
            />
          </label>

          <label className="flex flex-col font-semibold">
            Email
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
              className="mt-2 p-2 border rounded w-full bg-white"
            />
          </label>

          <label className="flex flex-col font-semibold">
            Message
            <textarea
              name="message"
              value={value.message}
              onChange={handleChange}
              rows="4"
              required
              className="mt-2 p-2 border rounded w-full bg-white"
            />
          </label>

          <button
            type="submit"
            className="font-michroma bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 disabled:opacity-50 transition-all duration-150"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {loading && (
            <div className="mt-4 border-4 border-green-500 border-t-transparent rounded-full w-8 h-8 animate-spin mx-auto"></div>
          )}
        </form>

        {result && (
          <p className="mt-4 text-gray-600 font-medium text-center">{result}</p>
        )}

        <p className="py-4 text-gray-500 text-center text-sm sm:text-base">
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
