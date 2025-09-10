import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="px-4 sm:px-6 md:px-6">
      {/* Main page heading */}
      <h1 className="flex justify-center font-bold text-4xl mt-12 font-michroma">
        Services
      </h1>

      <div className="flex flex-wrap justify-center mt-8 mb-8 gap-6">
        {/* Residential Cleaning */}
        <section className="w-full sm:w-[48%] lg:w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md">
          <h2 className="sr-only">Residential Cleaning Services</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Regular House Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Deep Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              End of Tenancy Cleaning
            </li>
          </ul>
        </section>

        {/* Commercial Cleaning */}
        <section className="w-full sm:w-[48%] lg:w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md">
          <h2 className="sr-only">Commercial Cleaning Services</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Office Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Retail & Shop Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              After-Builders Cleaning
            </li>
          </ul>
        </section>

        {/* Specialist Cleaning */}
        <section className="w-full sm:w-[48%] lg:w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md">
          <h2 className="sr-only">Specialist Cleaning Services</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Carpet & Upholstery Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Kitchen & Appliance Cleaning
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
              Move-In / Move-Out Cleaning
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Services;
