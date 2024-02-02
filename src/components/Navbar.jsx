import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { TfiMenu } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <nav className="flex px-5 fixed w-screen justify-between items-center bg-transparent pl-0 md:pl-14 pt-8 ">
      <div>
        <Link to={"/"}>
          <img className="h-10 pl-5 " src={logo} alt="" />
        </Link>

        <hr className=" hidden absolute top-[78px] left-36 z-40 border-slate-600 w-[33rem]" />
      </div>
      <div className="hidden barlow-condensed-extralight uppercase text-white  bg-gray-800/10 backdrop-blur-2xl pl-24 pr-40 gap-10 h-fit py-8 items-center md:flex  *:flex *:gap-3">
        <Link to={"/"}>
          <b className="barlow-condensed-medium">00</b> <p>Home</p>
        </Link>
        <Link to={"/destination"}>
          <b className="barlow-condensed-regular">01</b> <p>Destination</p>
        </Link>
        <Link to={"crew"}>
          <b className="barlow-condensed-regular">02</b> <p>Crew</p>
        </Link>
        <Link to={"Technology"}>
          <b className="barlow-condensed-regular">03</b> <p>Technology</p>
        </Link>
      </div>
      {show === false ? (
        <TfiMenu
          onClick={() => setShow((prev) => !prev)}
          className="text-[#D0D6F9] text-3xl md:hidden"
        />
      ) : (
        <IoCloseSharp
          onClick={() => setShow((prev) => !prev)}
          className="text-[#D0D6F9] text-4xl md:hidden"
        />
      )}
      {show && (
        <aside className="md:hidden w-[70%] pt-20 pl-10 text-base 
         -z-30 fixed flex top-0 right-0 flex-col
         h-screen  barlow-condensed-extralight uppercase text-white
        bg-white/10 backdrop-blur-md *:flex *:gap-3 gap-7 ">
        <Link to={"/"}>
          <b className="barlow-condensed-medium">00</b> <p>Home</p>
        </Link>
        <Link to={"/destination"}>
          <b className="barlow-condensed-regular">01</b> <p>Destination</p>
        </Link>
        <Link to={"crew"}>
          <b className="barlow-condensed-regular">02</b> <p>Crew</p>
        </Link>
        <Link to={"Technology"}>
          <b className="barlow-condensed-regular">03</b> <p>Technology</p>
        </Link>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
