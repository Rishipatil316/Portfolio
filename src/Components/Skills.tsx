import {
  FaJava, FaGithub,
} from 'react-icons/fa';
import {
  SiPython, SiC, SiMysql, SiCplusplus,
} from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <SiMysql />, label: 'SQL', color: 'text-blue-500' },
    { icon: <SiPython />, label: 'Python', color: 'text-yellow-300' },
    { icon: <FaJava />, label: 'Java', color: 'text-orange-400' },
    { icon: <SiC />, label: 'C', color: 'text-indigo-500' },
    { icon: <SiCplusplus />, label: 'C++', color: 'text-blue-400' },
    { icon: <FaGithub />, label: 'GitHub', color: 'text-gray-200' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-8" id="skills">
      <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-4 tracking-wider">Technical Skills</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full shadow-md"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-32 h-32 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-purple-500/50 transform transition-all duration-300 hover:scale-105 group"
          >
            <div className={`text-5xl mb-2 transition-all duration-300 group-hover:scale-110 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="font-semibold text-lg tracking-wide group-hover:text-purple-300">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
