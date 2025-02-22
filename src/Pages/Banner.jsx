import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white">
      {/* Background Image with High Quality */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.officetimer.com/wp-content/uploads/2020/02/Untitled-design7.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Soft Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Organize Your Tasks Effortlessly
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Boost your productivity with TaskBoard. Create, manage, and track your tasks with an intuitive interface.
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Banner;
