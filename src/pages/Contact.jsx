import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mt-20 grid md:grid-cols-2 gap-12 px-6">
      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-4 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button className="w-full py-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg flex flex-col justify-center text-center">
        <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
        <p className="text-gray-300 mb-6">
          Got a project idea or just want to say hi?  
          I’d love to hear from you.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-3xl mb-6">
          <a href="https://github.com/harshitjain044" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/harshit-jain044" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/harshitjain044" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            <FaTwitter />
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-3 text-gray-300">
          <FaEnvelope />
          <a href="mailto:harshitjain9908@gmail.com" className="hover:text-teal-400">
            Harshitjain9908@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
