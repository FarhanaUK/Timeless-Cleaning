import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

function PhoneCall() {
  return (
    <div className="flex flex- justify-between items-center w-full pr-6 ">
      <a className="font-arsenal text-2xl p-6" href="tel:+447377156973">
        {" "}
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        07377 156 973
      </a>
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default PhoneCall;
