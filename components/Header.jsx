import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          priority
          src={assets.profile_img}
          className="w-40 rounded-full object-fill mt-24"
          alt="header"
        />
      </motion.div>
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, I'm Kishor Joshi
        <Image
          priority
          src={assets.hand_icon}
          className="w-6"
          alt="waving hand"
        />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Full-Stack Developer from India
      </motion.h1>
      <motion.p
        className="max-w-3xl mx-auto font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I specialize in building modern, scalable, and user-friendly web
        applications. With expertise in both front-end and back-end
        technologies, I enjoy turning complex problems into elegant solutions.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact Me{" "}
          <Image
            priority
            src={assets.right_arrow_white}
            className="w-4"
            alt="arrow"
          />
        </motion.a>
        <motion.a
          download
          href="/sample_resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Resume{" "}
          <Image
            priority
            src={assets.download_icon}
            className="w-4"
            alt="download"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
