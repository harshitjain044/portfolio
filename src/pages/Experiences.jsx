import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Event Manager",
    company: "MindFlare Society, MAIT",
    duration: "Feb 2025 – Present",
    description:
      "Organized DSA Xtreme Battle sponsored by Coding Blocks. Managed end-to-end event execution including planning, coordination, and sponsorship handling.",
  },
  {
    role: "Intern – HR Onboarding",
    company: "Yoma Business Solutions, Gurugram",
    duration: "Jan 2025",
    description:
      "Handled HR onboarding processes including employee data management, compliance checks, and assisted in smooth induction of new hires.",
  },
  {
    role: "Founder",
    company: "Harshit Electronics",
    duration: "2024 – Present",
    description:
      "Built and managed an electronics retail business. Handled procurement, database creation, and customer relationship management.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-10 py-20 bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 w-1 h-full bg-gray-700 rounded-full"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative pl-14"
            >
              {/* Circle Icon */}
              <div className="absolute left-0 top-2 bg-cyan-500 rounded-full p-2">
                <Briefcase size={18} className="text-white" />
              </div>

              {/* Card */}
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-cyan-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-300 mt-3">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
