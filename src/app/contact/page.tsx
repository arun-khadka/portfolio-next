import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/arun-khadka",
      icon: (
        <SocialIcon
          network="github"
          url="https://github.com/arun-khadka"
          fgColor="white"
          bgColor="transparent"
        />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arun-khadka-058016214/",
      icon: (
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/arun-khadka-058016214/"
          fgColor="white"
          bgColor="transparent"
        />
      ),
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: (
        <SocialIcon
          network="twitter"
          url="https://www.twitter.com"
          fgColor="white"
          bgColor="transparent"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-sky-500 mb-4"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-primary rounded-2xl p-8 shadow-lg backdrop-blur-lg bg-opacity-90"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r hover:scale-105 from-gray-50 hover:from-indigo-400 to-indigo-400 hover:to-gray-50 transition-colors"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="group transition-colors duration-300">
                  <h3 className="font-semibold text-blue-800">Location</h3>
                  <p className="text-blue-600 transition-colors duration-300">
                    Biratnagar, Nepal
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r hover:scale-105 from-gray-50 hover:from-green-400 to-green-400 hover:to-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <motion.a
                  href="mailto:arunkhadka009@gmail.com"
                  className="p-3 bg-green-100 rounded-lg"
                >
                  <EnvelopeIcon className="w-6 h-6 text-green-600" />
                </motion.a>
                <div>
                  <h3 className="font-semibold mr-24 text-green-800">Email</h3>
                  <motion.a
                    href="mailto:arunkhadka009@gmail.com"
                    className=" text-green-600 hover:text-white hover:underline"
                  >
                    arunkhadka009@gmail.com
                  </motion.a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r hover:scale-105 from-gray-50 hover:from-purple-400 to-purple-400 hover:to-gray-50 rounded-lg transition-colors"
              >
                <motion.a
                  href="tel:+977 9863752064"
                  className="p-3 bg-purple-100 rounded-lg"
                >
                  <PhoneIcon className="w-6 h-6 text-purple-600" />
                </motion.a>
                <div>
                  <h3 className="font-semibold mr-10 text-purple-800">Phone</h3>
                  <motion.a
                    href="tel:+977 9863752064"
                    className="text-purple-600 hover:text-white hover:underline"
                  >
                    +977 98-63752064
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Follow Me On
              </h3>
              <div className="flex gap-4 justify-center ">
                {socialLinks.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-2 hover:scale-90 rounded-2xl bg-gradient-to-r from-blue-400 hover:from-indigo-500 to-indigo-500 hover:to-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            {/* Form Decoration Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-purple-800"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:bg-blue-800"></div>
              <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-800"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-primary rounded-2xl p-8 shadow-lg backdrop-blur-lg bg-opacity-90"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Send a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
