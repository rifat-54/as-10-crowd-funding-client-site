import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navber.css";
import { useContext } from "react";
import { authContex } from "../routes/AuthProvider";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navber = () => {
  const { user, userLogOut } = useContext(authContex);
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = (
    <div className="space-x-2  md:flex lg:text-white text-[18px] font-semibold">
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/allcampaign"}>All Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/addnewcampaign"}>Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/mycampaign"}>My Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/mydonation"}>My Donations</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar px-3 bg-[#15B392]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-[#F7FD04] md:text-2xl font-bold"
        >
          Crowd Funding
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 mr-2">
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button
              onClick={userLogOut}
              className="md:text-xl text-white font-bold"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex gap-3 mr-2">
            <Link className="md:text-xl text-white font-bold" to={"/login"}>
              Login
            </Link>
            <Link className="md:text-xl text-white font-bold" to={"/register"}>
              Register
            </Link>
          </div>
        )}
        <div className="flex items-center ml-2">
          {/* sun icon */}
          <button onClick={handleTheme} className="md:text-2xl">
            {theme === "light" ? <MdDarkMode /> : <CiDark />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
