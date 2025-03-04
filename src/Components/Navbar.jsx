import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../providers/ThemeProvider";
import { AuthContext } from "../providers/AuthProvider";

import logo from "../assets/TM_Logo.jpeg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  return (
    <nav
      className={`px-6 py-4 sticky top-0 z-10 shadow-md ${
        isDarkMode ? "bg-gray-900" : "bg-cyan-800"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <img className="h-8 w-8 object-cover" src={logo} alt="Task Manager Logo" />
          <h2 className="font-bold text-yellow-400 text-xl md:text-2xl">
            Task<span className="text-purple-500">Zone</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleDarkMode} className="text-2xl cursor-pointer">
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {user && (
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
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
              <button onClick={handleLogOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded dark:bg-gray-800 dark:text-white">
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <AiOutlineClose className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <AiOutlineMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyan-800 py-4 shadow-lg">
          <ul className="flex flex-col items-center gap-4">
            <button onClick={toggleDarkMode} className="text-2xl cursor-pointer">
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            {user && (
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400"
                }
                onClick={() => setMenuOpen(false)}
              >
                My Tasks
              </NavLink>
            )}

            {user ? (
              <div className="flex flex-col items-center gap-3">
                <img src={user.photoURL || "/default-avatar.png"} alt="User Avatar" className="w-12 h-12 rounded-full border" />
                <button onClick={handleLogOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
