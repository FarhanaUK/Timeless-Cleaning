import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import ImageSections from "./Components/ImageSections";
import Marquee from "./Components/Marquee";
import Nav from "./Components/Nav";
import TopBar from "./Components/TopBar";
import Services from "./Components/Services";
import SlidingBanner from "./Components/SlidingBanner";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ServicePrice from "./Components/ServicePrice";
import BusinessName from "./Components/BusinessName";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Faqs from "./Components/Faqs";
import TermsAndConditions from "./Components/TermsAndConditions";

function App() {
  return (
    <div className="font-urbanist">
      <TopBar />
      <BusinessName />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServicePrice />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
