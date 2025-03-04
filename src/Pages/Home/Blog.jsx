import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";

const blogs = [
  {
    id: 1,
    title: "The Power of TaskZone: Real-Time Task Management",
    date: "Feb 21, 2025",
    description: "TaskZone offers real-time task management with drag-and-drop functionality, live updates, and task categorization for enhanced productivity.",
    comments: 12,
    link: "/blogs/real-time-task-management",
  },
  {
    id: 2,
    title: "Building TaskZone with React and Node.js",
    date: "Feb 18, 2025",
    description: "TaskZone leverages React for the frontend and Node.js for the backend, ensuring a powerful, scalable, and efficient task management solution.",
    comments: 5,
    link: "/blogs/react-nodejs-taskzone",
  },
  {
    id: 3,
    title: "The Future of Task Management with TaskZone",
    date: "Feb 15, 2025",
    description: "With Firebase authentication, real-time updates, and task organization, TaskZone sets the benchmark for next-gen task management tools.",
    comments: 8,
    link: "/blogs/future-task-management",
  },
];

const Blog = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-16 px-6 md:px-12`}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          📖 TaskZone Blog
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
          Discover insights, guides, and updates about TaskZone's features and development.
        </p>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              className={`p-6 rounded-2xl shadow-lg transform transition-all cursor-pointer
                ${isDarkMode ? "bg-gray-800 text-white shadow-gray-700" : "bg-white text-gray-900 shadow-md"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Link to={blog.link}>
                <h3 className="text-2xl font-semibold text-yellow-500">{blog.title}</h3>
              </Link>
              <p className="text-sm text-gray-400 mt-1">{blog.date}</p>
              <p className="mt-3 text-gray-500 dark:text-gray-300">{blog.description}</p>
              <p className="mt-4 text-yellow-400 font-semibold">💬 {blog.comments} Comments</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;