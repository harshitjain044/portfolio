import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: "95%" },
  { name: "CSS / Tailwind", level: "85%" },
  { name: "JavaScript (ES6+)", level: "80%" },
  { name: "React.js", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "Git & GitHub", level: "80%" },
];

const Skills = () => {
  return (
    <section id="skills" className="px-10 py-20 bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-5 shadow-lg border border-gray-700"
          >
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full">
              <motion.div
                className="bg-cyan-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
