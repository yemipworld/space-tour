import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex  overflow-hidden fixed w-screen justify-between items-center bg-transparent pl-14 pt-8 ">
      <div>
        <Link to={"/"}>
        <img className="h-10" src={logo} alt="" />
        </Link>
       
        <hr className=" absolute top-[78px] left-36 z-40 border-slate-600 w-[33rem]" />
      </div>
      <div className="barlow-condensed-extralight uppercase text-white  bg-gray-800/10 backdrop-blur-2xl pl-24 pr-40 gap-10 h-fit py-8 items-center flex  *:flex *:gap-3">
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
    </nav>
  );
};

export default Navbar;
