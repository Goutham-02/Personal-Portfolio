import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Code, Database, Wrench, Brain, Trophy, ChevronRight } from 'lucide-react';

const SkillBar = ({ skill, index, categoryColor }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.years}
          </span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {skill.level}%
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    years: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  categoryColor: PropTypes.string.isRequired
};

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90, years: "2+" },
        { name: "TypeScript", level: 85, years: "1.5+" },
        { name: "React.js", level: 88, years: "2+" },
        { name: "Next.js", level: 80, years: "1+" },
        { name: "Redux", level: 75, years: "1+" }
      ]
    },
    backend: {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, years: "2+" },
        { name: "Express.js", level: 88, years: "2+" },
        { name: "MongoDB", level: 80, years: "1.5+" },
        { name: "MySQL", level: 75, years: "1+" },
        { name: "RESTful APIs", level: 90, years: "2+" }
      ]
    },
    programming: {
      title: "Programming Languages",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "C++", level: 85, years: "3+" },
        { name: "Python", level: 80, years: "2+" },
        { name: "Java", level: 70, years: "1.5+" },
        { name: "Data Structures", level: 88, years: "2+" },
        { name: "Algorithms", level: 85, years: "2+" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 85, years: "2+" },
        { name: "Docker", level: 70, years: "1+" },
        { name: "Postman", level: 88, years: "2+" },
        { name: "Arduino IDE", level: 75, years: "1+" },
        { name: "Machine Learning", level: 78, years: "1.5+" }
      ]
    }
  };

  const achievements = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "300+ Problems Solved",
      description: "LeetCode & GeeksforGeeks",
      color: "text-yellow-500"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "16+ Pages Built",
      description: "Next.js & Material UI",
      color: "text-blue-500"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "5+ APIs Created",
      description: "Node.js & Express.js",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Achievements Banner */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`${achievement.color} mb-3 flex justify-center`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.icon}
                <span className="ml-2 font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white mr-4`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="space-y-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryColor={skillCategories[activeCategory].color}
                  />
                ))}
              </div>
            </div>

            {/* Skill Insights */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Skill Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                        Full-Stack Development
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Proficient in MERN stack with 2+ years of experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                        Problem Solving
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        300+ problems solved across multiple platforms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                        Machine Learning
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Applied ML in real-world projects with 97% accuracy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Currently Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Advanced React Patterns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Cloud Technologies (AWS)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Deep Learning with PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
