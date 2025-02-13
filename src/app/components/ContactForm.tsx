"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl w-full mx-auto p-8 rounded-2xl bg-slate-900 shadow-xl dark:from-slate-800 dark:to-slate-900"
    >
      <div className="space-y-6">
        {/* Name Field */}
        <div className="relative group">
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="w-full px-4 py-3 text-gray-800 dark:text-white bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 focus:border-white focus:ring-0 peer placeholder-transparent"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 -top-2.5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-1.5 text-gray-500 dark:text-gray-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white"
          >
            Your Name
          </label>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 ml-2">Name is required</p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative group">
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            id="email"
            className="w-full px-4 py-3 text-gray-800 dark:text-white bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 focus:border-white focus:ring-0 peer placeholder-transparent"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-1.5 text-gray-500 dark:text-gray-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white"
          >
            Email Address
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 ml-2">
              Valid email is required
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative group">
          <textarea
            {...register("message", { required: true, minLength: 10 })}
            id="message"
            rows={4}
            className="w-full px-4 py-3 text-gray-800 dark:text-white bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 focus:border-blue-500 focus:ring-0 peer placeholder-transparent"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-4 -top-2.5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-1.5 text-gray-500 dark:text-gray-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white"
          >
            Your Message
          </label>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 ml-2">
              Message must be at least 10 characters
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 0 0"
            fill="currentColor"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send Message
        </motion.button>
      </div>

      {/* Form Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-purple-800"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:bg-blue-800"></div>
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-800"></div>
      </div>
    </motion.form>
  );
}
