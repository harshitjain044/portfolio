import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="backdrop-blur-md bg-white/10 fixed top-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left side - Logo / Name */}
        <h1 className="text-2xl font-extrabold text-teal-400">Harshit Jain</h1>

        {/* Middle - Navigation Links */}
        <div className="flex-1 flex justify-center space-x-8">
          {["Home", "Projects", "Skills", "Experiences", "Contact"].map((item) => {
            const link = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={link}
                className={`text-lg font-medium transition ${
                  pathname === link ? "text-teal-400" : "hover:text-teal-300"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Right side - Resume Button */}
        <div>
          <a
            // href="https://drive.google.com/file/d/1seSPFMke9enBdZWoByRTZNa8wOT203zD/view?usp=drive_link" 
            href="https://drive.google.com/file/d/1ekad4pHk0vWd-0DyMGqSiUjCiiefm5sw/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 font-semibold shadow-md hover:scale-105 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
