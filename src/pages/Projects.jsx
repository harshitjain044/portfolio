import ProjectCard from "../components/ProjectCard";
import backgroundChangerImg from "../assets/background_changer.png";
import spotify_clone from "../assets/spotify_clone.png"
import todo from "../assets/todo.png"

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
      image: spotify_clone,
      title: "Spotify-clone",
      description: " ",
      tech: ["React", "Tailwind CSS", "node", "database"],
      github: "https://github.com/harshitjain044/Spotify_Clone",
      live: "https://spotifycloneharshit.netlify.app/",
    },{
      image: todo,
      title: "Todo Site",
      description: "Todo Site with CRED operations ",
      tech: ["React", "Tailwind CSS", ],
      github: "https://github.com/harshitjain044/Todo",
      live: "https://tod0-site.netlify.app/",
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
