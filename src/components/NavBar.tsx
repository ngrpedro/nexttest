import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <>
      <div className="navbar isPrimary">
        <div className="navbar-band ">
          <a
            id="a"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBarPedro"
            onClick={() => {
              let v = document.getElementById("a");
              if (v.classList.contains("is-active")) {
                v.classList.remove("is-active");
              } else {
                v.classList.add("is-active");
              }
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu is-active" id="navBarPedro">
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
