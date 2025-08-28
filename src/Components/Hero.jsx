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
