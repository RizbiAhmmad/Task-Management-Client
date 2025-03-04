import { useContext } from "react";
import { CheckCircle, Rocket, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../providers/ThemeProvider";

const features = [
  {
    icon: <Rocket size={40} className="text-blue-500" />,
    title: "Fast & Efficient",
    description: "Manage tasks with lightning speed using our optimized UI.",
  },
  {
    icon: <Users size={40} className="text-purple-500" />,
    title: "Collaborate with Team",
    description: "Share and assign tasks to team members in real-time.",
  },
  {
    icon: <Clock size={40} className="text-yellow-500" />,
    title: "Stay on Track",
    description: "Never miss a deadline with automated reminders and tracking.",
  },
  {
    icon: <CheckCircle size={40} className="text-green-500" />,
    title: "Simple & Intuitive",
    description: "A clean, easy-to-use interface for seamless task management.",
  },
];

const FeaturesSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-16`}>
      <div className="container mx-auto px-12 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Powerful Features to Boost Your Productivity
        </motion.h2>

        <motion.p 
          className="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our task management system is designed to keep you organized, 
          focused, and productive.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 
                ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
