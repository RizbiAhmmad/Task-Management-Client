import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../providers/ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
    {
      name: "Ayesha Rahman",
      title: "Team Lead, ProjectCo",
      feedback: "This task board has drastically improved our team's productivity. Simple, clean, and super effective!",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Tanvir Hasan",
      title: "Frontend Developer",
      feedback: "Love the drag-and-drop and real-time sync. It feels like Trello, but tailored for developers.",
      avatar: "https://i.pravatar.cc/150?img=36"
    },
    {
      name: "Mehedi Chowdhury",
      title: "Freelancer",
      feedback: "The best task management tool I've used so far. Lightweight yet powerful.",
      avatar: "https://i.pravatar.cc/150?img=48"
    },
    {
      name: "Sarah Ahmed",
      title: "Project Manager, DevFleet",
      feedback: "It helped streamline our entire sprint planning. Intuitive UI and great performance!",
      avatar: "https://i.pravatar.cc/150?img=39"
    },
    {
      name: "Nayeem Islam",
      title: "UX Designer",
      feedback: "Finally, a tool that respects both function and form. The interface is gorgeous and productive.",
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Ritika Das",
      title: "Startup Founder",
      feedback: "I use this daily to keep track of my team's goals. It’s simple but powerful.",
      avatar: "https://i.pravatar.cc/150?img=52"
    },
    {
      name: "Zubair Khan",
      title: "DevOps Engineer",
      feedback: "Integration was seamless, and tracking deployments is now clearer than ever.",
      avatar: "https://i.pravatar.cc/150?img=60"
    },
    {
      name: "Farhana Akter",
      title: "Content Strategist",
      feedback: "Planning content tasks has never been smoother. I love how organized it makes me feel.",
      avatar: "https://i.pravatar.cc/150?img=22"
    }
  ];
  

const Testimonial = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-16`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💬 What Users Are Saying
        </motion.h2>

        <motion.p 
          className="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Real feedback from real users who’ve improved their productivity with our task board.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={30}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`p-6 rounded-xl shadow-md h-full flex flex-col justify-between
                  ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-400 dark:text-gray-300">{t.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">“{t.feedback}”</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
