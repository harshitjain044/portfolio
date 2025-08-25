import ProjectCard from "../components/ProjectCard";
import backgroundChangerImg from "../assets/background_changer.png";

const Projects = () => {
  const projects = [
    {
      image: backgroundChangerImg,
      title: "Background Changer",
      description: "click any button to change background color",
      tech: ["React.js", "Tailwind CSS", "html"],
      github: "https://github.com/harshitjain044/background-changer-",
      live: "https://background-changer044.netlify.app",
    },
    {
      image: "https://source.unsplash.com/600x400/?website,design",
      title: "Portfolio Website",
      description: "A modern and stylish portfolio site.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/harshitjain044/portfolio",
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
