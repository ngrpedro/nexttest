import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <>
      <div className="navbar isPrimary">
        <div className="navbar-band fontAwesomeIcon"></div>

        <div className="navbar-menu">
          <span className="icon fas fa-2x fontAwesomeIcon">
            <FontAwesomeIcon icon={faHotel} />
          </span>
          <div className="navbar-start ml-6">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/posts/first-post">
              <a className="navbar-item">Views</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
