"use client";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactPage from "./contact/page";
import { useEffect } from "react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-28 bg-slate-900"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-96 w-full rounded-2xl mt-12 overflow-hidden"
              >
                <Image
                  src="/images/projects/about-profile.jpg"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold text-sky-500 mb-6 mt-12">
                  About Me
                </h2>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white text-justify text-lg leading-relaxed mb-6"
                >
                  I'm a passionate full-stack developer with 5+ years of
                  experience creating digital experiences. Specializing in
                  modern web technologies and user-centric design, I thrive on
                  building scalable, high-performance applications. With
                  expertise in front-end frameworks like React and back-end
                  technologies like Node.js and PHP, I craft seamless solutions
                  that balance functionality and aesthetics. I enjoy solving
                  complex problems and continuously learning to stay ahead in
                  the ever-evolving tech landscape. Passionate about clean code,
                  best practices, and intuitive UX, I aim to deliver impactful
                  digital products that enhance user engagement and business
                  growth.
                </motion.div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00b4db] to-[#0083b0] text-white hover:from-[#0083b0] hover:to-[#00b4db] transition-all shadow-md"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 bg-slate-900 scroll-m-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center text-sky-500 mb-12">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    index={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    image={project.image}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/projects"
                  className="px-8 py-3 border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-500 hover:text-white transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-24  bg-slate-900 relative scroll-m-10"
        >
          {/* Gradient Blob Decorations */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-purple-800"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:bg-blue-800"></div>
            <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-800"></div>
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center text-sky-500 mb-12">
                Technical Skills
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "AWS",
                  "Python",
                  "Docker",
                  "GraphQL",
                  "MongoDB",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 bg-gray-50 rounded-xl text-center hover:text-white transition-all duration-300 ${
                      skill === "React"
                        ? "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
                        : skill === "Node.js"
                        ? "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-700"
                        : skill === "AWS"
                        ? "hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700"
                        : skill === "Docker"
                        ? "hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-400"
                        : "hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400"
                    }`}
                  >
                    <div className="h-12 w-12 mx-auto mb-4">
                      {/* Add skill icons here */}
                      <div className="text-4xl">🌟</div>
                    </div>
                    <h3 className="font-semibold text-gray-800 hover:text-white">
                      {skill}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-b from-primary to-secondary -scroll-mt-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactPage />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
