import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
import { Routes, Route } from "react-router-dom";
import ServicePrice from "./Components/ServicePrice";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Faqs from "./Components/Faqs";
import TermsAndConditions from "./Components/TermsAndConditions";

function App() {
  return (
    <div className="font-urbanist w-full overflow-x-hidden">
      <TopBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service-price" element={<ServicePrice />} />
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
