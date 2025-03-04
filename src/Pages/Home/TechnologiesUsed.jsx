import { useContext } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";
import { ThemeContext } from "../../providers/ThemeProvider";

const technologies = [
  { icon: <FaReact size={50} className="text-blue-500" />, name: "React.js" },
  { icon: <SiVite size={50} className="text-purple-500" />, name: "Vite.js" },
  { icon: <SiTailwindcss size={50} className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={50} className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress size={50} className="text-gray-500" />, name: "Express.js" },
  { icon: <SiMongodb size={50} className="text-green-600" />, name: "MongoDB" },
  { icon: <FaHtml5 size={50} className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} className="text-blue-600" />, name: "CSS3" },
  { icon: <FaJsSquare size={50} className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaGitAlt size={50} className="text-red-500" />, name: "Git & GitHub" },
];

const TechnologiesUsed = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-16 px-12`}>
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          🛠️ Technologies Used
        </motion.h2>

        <motion.p 
          className="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Our project is built with modern web technologies to ensure high performance, scalability, and an amazing user experience.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center transition-all
                ${isDarkMode ? "bg-gray-800 text-white shadow-gray-700" : "bg-white text-gray-900 shadow-lg"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.15 } }}
            >
              {tech.icon}
              <h3 className="text-lg font-semibold mt-4">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsed;
