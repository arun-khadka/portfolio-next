import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
