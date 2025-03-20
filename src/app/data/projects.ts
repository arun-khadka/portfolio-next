
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
      title: "House Rental System",
      description: "House Rental System is a web application that allows tenants to search for properties, while landlords can easily list and manage their offerings; the platform ensures efficient rental experience through detailed property listings, and communication between users.",
      image: "/images/projects/ecommerce.png",
      techStack: ["React.js", "Tailwind CSS", "MongoDb", "Node.js"],
      liveUrl: "",
      githubUrl: "https://github.com/arun-khadka/mern-estate"
    },
    {
      id: 2,
      title: "Job Portal System",
      description: "A full-stack Job Portal Application designed to streamline job searching and recruitment using modern tools, ensuring a seamless experience for both employers and job seekers by providing advanced search filters and an intuitive user interface.",
      image: "/images/projects/job.png",
      techStack: ["React.js", "Tailwind CSS", "Redux", "MongoDb", "Node.js"],
      liveUrl: "",
      githubUrl: "https://github.com/arun-khadka/react-jobportal"
    },
    {
      id: 3,
      title: "React Weather-app",
      description: "A React JS weather app uses the OpenWeather API to fetch and display real-time weather data like temperature, humidity, and wind speed. It features a clean, responsive design, error handling, and visual elements for an engaging experience.",
      image: "/images/projects/weather.png",
      techStack: ["React.js", "openweathermapAPI"],
      liveUrl: "",
      githubUrl: "https://github.com/arun-khadka/React-weather-app"
    },
    
  ];