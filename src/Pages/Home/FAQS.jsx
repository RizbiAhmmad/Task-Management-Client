import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../providers/ThemeProvider";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is TaskZone?",
    answer: "TaskZone is a powerful task management tool that allows users to organize, track, and manage their tasks efficiently with real-time updates and drag-and-drop functionality."
  },
  {
    question: "Is TaskZone free to use?",
    answer: "Yes! TaskZone offers a free plan with all essential features. Additional premium features may be introduced in the future."
  },
  {
    question: "How do I add a new task?",
    answer: "To add a new task, simply click on the 'Add Task' button, enter the task details, and save it. You can also categorize it as To-Do, In Progress, or Done."
  },
  {
    question: "Can I use TaskZone on mobile?",
    answer: "Absolutely! TaskZone is fully responsive and works seamlessly on desktops, tablets, and mobile devices."
  },
  {
    question: "Does TaskZone support team collaboration?",
    answer: "Currently, TaskZone is designed for individual task management, but team collaboration features are planned for future updates."
  }
];

const FAQS = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-16 px-6 md:px-12`}>
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          ❓ Frequently Asked Questions
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
          Find answers to the most common questions about TaskZone.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`p-5 rounded-2xl shadow-md cursor-pointer transition-all
                ${isDarkMode ? "bg-gray-800 text-white shadow-gray-700" : "bg-white text-gray-900 shadow-md"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
              </div>
              {openIndex === index && <p className="mt-3 text-gray-400">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
