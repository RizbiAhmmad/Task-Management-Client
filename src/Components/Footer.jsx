import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";


const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-8 text-center`}>
      <p className="text-gray-700 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} TaskZone. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;