"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface HeroProps {
  text: string;
}

interface ButtonProps {
  id?: string;
  label: string;
}

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#14142b] animate-gradient"
    >
      <div id="home" className="text-center max-w-3xl scroll-m-96">
        <HeroTitle
          text="Hi,
         I'm Arun Khadka"
        />
        <HeroSubtitle text="Frontend Enthusiast | Building beautiful web experiences" />
        <HeroButton id="projects" label="View My Work" />
      </div>
    </motion.section>
  );
}

const HeroTitle: React.FC<HeroProps> = ({ text }) => (
  <motion.h1
    variants={textVariants}
    className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#00b4db] to-[#0083b0] bg-clip-text text-transparent"
  >
    {text}
  </motion.h1>
);

const HeroSubtitle: React.FC<HeroProps> = ({ text }) => (
  <motion.p variants={textVariants} className="text-2xl text-gray-300 mb-8">
    {text}
  </motion.p>
);

const HeroButton: React.FC<ButtonProps> = ({ label, id }) => (
  <motion.button
    onClick={() => {
      if (id) {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }}
    variants={buttonVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00b4db] to-[#0083b0] text-white hover:from-[#0083b0] hover:to-[#00b4db] transition-all shadow-md"
  >
    {label}
  </motion.button>
);
