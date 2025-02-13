
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    category?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration.",
      image: "/images/projects/ecommerce.png",
      techStack: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example-store.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      id: 2,
      title: "React To-do App",
      description: "A React To-Do App is a simple application that allows users to add, delete, and mark tasks as completed. It helps users manage their daily tasks efficiently.",
      image: "/images/projects/task.png",
      techStack: ["React", "Firebase", "Material UI", "Redux"],
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/arun-khadka/React-Todo"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive personal portfolio website with animated sections and dark mode.",
      image: "/images/projects/portfolio.png",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio"
    },
    
  ];