import PhoneCall from "./TopBar";
import SlidingBanner from "./SlidingBanner";
import Services from "./Services";
import ImageSections from "./ImageSections";
import CallToAction from "./CallToAction";
import Marquee from "./Marquee";

function Hero() {
  return (
    <div>
      <div>
        <p className="text-center text-blue-900 text-xl mb-8">
          Reliable and Affordable Cleaning Services for a Sparkling Home
        </p>
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
