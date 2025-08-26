import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl mt-12 font-michroma">
        Services
      </h1>

      <div className="flex flex-wrap justify-between mt-8 mb-8 ml-12">
        <ul className="w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md">
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

        <ul className="w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md">
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

        <ul className="w-1/5 space-y-4 p-4 border-2 border-gray-200 bg-gray-50 rounded-lg shadow-md mr-12">
          <li>
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
            Carpet & Upholstery Cleaning
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
            Window Cleaning
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
            Kitchen & Appliance Cleaning{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
            Move-In / Move-Out Cleaning
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
