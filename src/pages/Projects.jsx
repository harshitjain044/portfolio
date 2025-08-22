import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      image: "https://source.unsplash.com/600x400/?laptop,code",
      title: "GPUverse",
      description: "Decentralized GPU rental marketplace.",
      tech: ["React.js", "Tailwind CSS", "Ethereum", "Solidity"],
      github: "https://github.com/your-repo",
      live: "https://your-live-demo.com",
    },
    {
      image: "https://source.unsplash.com/600x400/?website,design",
      title: "Portfolio Website",
      description: "A modern and stylish portfolio site.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/your-portfolio",
      live: "https://your-portfolio.com",
    },
  ];

  return (
    <section id="projects" className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
