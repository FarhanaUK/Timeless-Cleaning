import PhoneCall from "./PhoneCall";
import SlidingBanner from "./SlidingBanner";
import Services from "./Services";
import ImageSections from "./ImageSections";
import CallToAction from "./CallToAction";
import Marquee from "./Marquee";

function Hero() {
  return (
    <div>
      <div>
        <PhoneCall />
      </div>
      <h1
        className="flex justify-center text-6xl space-x-4 mt-16 mb-4 text-blue-500
        font-michroma"
      >
        Timeless Cleaning
      </h1>
      <p className="text-center text-blue-900 text-xl mb-8">
        Reliable and Affordable Cleaning Services for a Sparkling Home
      </p>

      <div>
        <SlidingBanner />
        <Services />
        <ImageSections />
        <CallToAction />
        <Marquee />
      </div>
    </div>
  );
}

export default Hero;
