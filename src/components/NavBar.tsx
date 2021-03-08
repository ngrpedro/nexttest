import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <>
      <div className="navbar isPrimary">
        <div className="navbar-brand">
          <span className="icon fas fa-2x fontAwesomeIcon">
            <FontAwesomeIcon icon={faHotel} />
          </span>

          <a
            id="burger"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBarPedro"
            onClick={() => {
              let burger = document.getElementById("burger");
              let navBar = document.getElementById("navBar");

              burger.classList.toggle("is-active");
              navBar.classList.toggle("is-active");
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu isPrimary ml-5" id="navBar">
          <div className="navbar-start">
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
