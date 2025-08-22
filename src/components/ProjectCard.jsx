import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, tech, github, live }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-cyan-500/40"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((item, i) => (
            <span
              key={i}
              className="bg-gray-800 text-cyan-400 text-xs px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition"
          >
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
