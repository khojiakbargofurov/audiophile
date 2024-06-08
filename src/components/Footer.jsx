import Logo from "../../public/assets/home/desktop/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import NavLinks from "./Navlinks";

function Footer(e) {
  const url = e;
  return (
    <div className="bg-[#101010] pb-20">
      <div className=" text-white align-element">
        <div className="pt-20 pb-9 flex flex-wrap justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="gap-5 lg:menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="pb-4">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team <br />
              of music lovers and sound specialists who are devoted to helping
              you get the <br />
              most out of personal audio. Come and visit our demo facility -
              we’re open 7 <br />
              days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex gap-2">
            <Link to="https://www.facebook.com/">
              <FaFacebookSquare />
            </Link>
            <Link to="https://x.com/">
              <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
