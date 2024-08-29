/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropDown = (e: { target: any }) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <div className="">
      <nav className=" bg-black px-4 pt-2 text-white  pb-3 rounded-t-3xl">
        <div className="flex items-center justify-between container mx-auto">
          <div className="scale-100 flex items-center cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <img src={logo} alt="" />
            <div className="h-[45px] w-[2px] bg-white mx-2" />
            <p className="cursor-pointer hover:underline mt-2">Help Center</p>
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <li className="group flex  cursor-pointer flex-col">
              <button className="px-5 py-2 border bg-[#1A1A1A] rounded-lg">
                Submit a request
              </button>
            </li>
          </ul>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                <li className="group flex  cursor-pointer flex-col">
                  <button className="px-5 py-2 border bg-[#1A1A1A] rounded-lg">
                    Submit a request
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
