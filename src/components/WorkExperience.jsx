import { Calendar, MapPin, Code, Users, Zap } from 'lucide-react';

const WorkExperience = () => {
  const experience = {
    title: "Software Development Intern",
    company: "Kreat.ai",
    duration: "Apr 2024 - Present",
    location: "Bengaluru",
    achievements: [
      {
        icon: <Code className="w-5 h-5" />,
        text: "Built 16+ responsive pages using Next.js and Material UI, integrating RESTful APIs to deliver interactive and scalable front-end experiences."
      },
      {
        icon: <Users className="w-5 h-5" />,
        text: "Developed reusable UI components and collaborated with teams in Agile sprints, focusing on performance, code quality, and UX best practices."
      },
      {
        icon: <Zap className="w-5 h-5" />,
        text: "Created and maintained 5+ backend APIs using Node.js and Express.js, supporting full-stack features and ensuring clean separation of front-end and back-end logic."
      }
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            {/* <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div> */}
            
            {/* Experience card */}
            <div className="relative pl-20 pb-8">
              {/* Timeline dot */}
              {/* <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div> */}
              
              {/* Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="text-blue-500 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-200">
                        {achievement.icon}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Material UI', 'Node.js', 'Express.js', 'RESTful APIs', 'Agile'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
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

export default WorkExperience;