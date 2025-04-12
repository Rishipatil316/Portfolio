import { FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-20" id="about">
      <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-4 tracking-wide">About Me</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full shadow-md"></div>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Left - Bio and Resume */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-md w-full md:w-1/2 hover:shadow-purple-500/30 transition duration-300">
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            I'm a Computer Science student passionate about building innovative solutions and learning new technologies.
            With a focus on web development and software engineering, I strive to create impactful applications that
            solve real-world problems.
          </p>

          
        </div>

    
        <div className="bg-gray-900 p-8 rounded-2xl shadow-md w-full md:w-1/2 hover:shadow-purple-500/30 transition duration-300">
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">My Profiles</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3 hover:text-purple-300 transition-colors duration-300">
              <SiCodechef className="text-white text-xl" />
              <a
                href="https://www.codechef.com/users/rishi_34"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CodeChef
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-300 transition-colors duration-300">
              <FaGithub className="text-white text-xl" />
              <a
                href="https://github.com/Rishipatil316"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
