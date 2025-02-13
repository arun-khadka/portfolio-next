import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={index < 3}
        />
      </div>

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack?.map((index, tech) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-900 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(liveUrl || githubUrl) && (
          <div className="mt-6 flex gap-4">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-purple-700 text-purple-700 rounded hover:bg-purple-700 hover:text-white transition-colors"
              >
                Live Demo
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white rounded bg-sky-500 hover:bg-white hover:text-sky-500 border-2 border-sky-500 transition-colors"
              >
                View Code
              </motion.a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
