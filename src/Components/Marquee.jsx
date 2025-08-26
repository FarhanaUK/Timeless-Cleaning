import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Marquee() {
  const reviews = [
    {
      name: "Tahmida Begum",
      review:
        "I can’t thank Timeless Cleaning enough! Excellent, professional, and reliable service. My home has never looked better!",
    },
    {
      name: "Tanvirul Islam",
      review:
        "They did an amazing deep clean on my office. Everything is spotless and fresh!",
    },
    {
      name: "Vicky Lee Huang",
      review:
        "Superb cleaning service. Very professional and attention to detail was amazing.",
    },
    {
      name: "John Bracey",
      review:
        "Timeless Cleaning was punctual, polite, and thorough. My kitchen and bathrooms look brand new. Highly recommend!",
    },
    {
      name: "Elef Siren",
      review:
        "Friendly team and very professional. They cleaned my carpets and windows quickly and perfectly. Great job!",
    },
    {
      name: "P Dickinson",
      review:
        "Fantastic cleaning service - they did a brilliant job in my entire flat. Efficient, reliable, and very professional.",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="flex justify-center font-bold text-4xl mt-12 font-arsenal">
        See what customers have to say
      </h1>

      <p className="mb-4 text-xl font-semibold text-gray-900 ml-8">
        Customer Reviews
      </p>

      <div className="flex items-center mb-4 ml-8 ">
        <p className="text-blue-500 hover:text-blue-700 text-4xl mr-4">5.0</p>

        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-4 bg-cyan-300 shadow-lg mx-4 rounded-lg border-l-4 border-blue-800 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <p className="text-xl font-semibold text-gray-900">
                {review.name}
              </p>
              <p className="text-md text-gray-700 italic">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
      </style>
    </div>
  );
}

export default Marquee;
