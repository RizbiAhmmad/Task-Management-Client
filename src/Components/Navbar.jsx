import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../providers/ThemeProvider";
import { AuthContext } from "../providers/AuthProvider";

import logo from "../assets/TM_Logo.jpeg"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  return (
    <nav
      className={`px-12 py-4 sticky top-0 z-10 shadow-md ${
        isDarkMode ? "bg-gray-900" : "bg-blue-600"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <img
            className="h-8 w-8 object-cover"
            src={logo}
            alt="Task Manager Logo"
          />
          <h2 className="font-bold text-yellow-400 text-xl md:text-2xl">
            Task<span className="text-purple-500">Zone</span>
          </h2>
        </Link>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto ${
            isDarkMode ? "bg-gray-900" : "bg-blue-600"
          } md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-400"
            }
          >
            My Tasks
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-400"
            }
          >
            About
          </NavLink>
        </div>

        {/* Right Side (Theme Toggle + Auth) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-2xl cursor-pointer">
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>

          {/* User Image & Logout */}
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
            >
              Log In
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <AiOutlineMenu
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
