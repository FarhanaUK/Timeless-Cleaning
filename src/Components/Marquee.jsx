import { Star } from "lucide-react";

function Marquee() {
  const reviews = [
    {
      name: "Tahmida Begum",
      review:
        "I can't thank Timeless Cleaning enough! Excellent, professional, and reliable service. My home has never looked better!",
    },
    {
      name: "Tanvirul Islam",
      review:
        "They did an amazing deep clean on my office. Everything is spotless and fresh!",
    },
    {
      name: "Vicky Huang",
      review:
        "Superb cleaning service. Very professional and attention to detail was amazing.",
    },
    {
      name: "John Bracey",
      review:
        "Timeless Cleaning was punctual, polite, and thorough. My kitchen and bathrooms look brand new. Highly recommend!",
    },
    {
      name: "Elef Sien",
      review:
        "Friendly team and very professional. They cleaned my carpets quickly and perfectly. Great job!",
    },
    {
      name: "P Dickinson",
      review:
        "Fantastic cleaning service - they did a brilliant job in my entire flat. Efficient, reliable, and very professional.",
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          animation: marquee 25s linear infinite;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl mt-8 mb-6 text-gray-800">
        See what customers have to say
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-2">
        <p className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold">
          5.0
        </p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400 fill-current"
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm sm:text-base ml-0 sm:ml-2">
          Based on customer reviews
        </p>
      </div>

      <div className="relative flex items-center w-full overflow-hidden">
        <div className="flex marquee-container">
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 mx-3 p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-3">
                <div className="flex gap-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {review.name}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
