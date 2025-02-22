import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center p-6">
      <motion.h1 
        className="text-9xl font-bold text-red-500 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2 
        className="text-3xl font-semibold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Oops! Page Not Found
      </motion.h2>
      <p className="text-gray-300 mt-2">
        The page you're looking for might have been removed or doesn't exist.
      </p>

      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-500 transition duration-300"
        >
          🔙 Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
