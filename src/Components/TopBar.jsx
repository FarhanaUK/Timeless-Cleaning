import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

function TopBar() {
  return (
    <div className="flex flex- justify-between items-center w-full pr-6 ">
      <a className="font-michroma text-2xl p-6" href="tel:+447305959517">
        {" "}
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        07305 959 517
      </a>

      <div>
        <Nav />
      </div>
    </div>
  );
}

export default TopBar;
