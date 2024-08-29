import { Link } from "react-router-dom";
import favIcon from "../assets/images/favicon.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#000000] text-white ">
      <div className="container relative flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="space-y-3">
            <h3 className="tracking-wide text-2xl font-medium">Abstract</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Branches</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide text-2xl font-medium">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Release Notes</Link>
              </li>
              <li>
                <Link to="/">Status</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide text-2xl font-medium">Community</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">LinkedIn</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Dribble</Link>
              </li>
              <li>
                <Link to="/">Podcast</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-medium">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
            </ul>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="">
              <li>
                <a href="">info@abstract.com</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:mt-36">
            <img src={favIcon} alt="" />
            <p className="lg:text-xl text-wrap">
              © Copyright 2022 Abstract Studio Design, inc All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
