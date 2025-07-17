import { Github, Calendar, Code, Zap, Shield, Eye, Star } from 'lucide-react';
import { useState } from 'react';

const EnhancedProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "myNotes",
      description: "A comprehensive notes storing application with secure authentication and efficient data handling.",
      detailedDescription: "Designed and developed a full-stack notes application using React.js & Bootstrap for a dynamic user experience. Features include secure JWT authentication, efficient MongoDB storage with Mongoose, and responsive design for all devices.",
      techStack: ["React.js", "Express.js", "MongoDB", "Node.js", "Bootstrap", "JWT"],
      features: [
        "Secure user authentication with JWT tokens",
        "CRUD operations for notes management",
        "Responsive design with Bootstrap",
        "Real-time data synchronization",
        "Search and filter functionality"
      ],
      githubLink: "https://github.com/Goutham-02/myNotes",
      duration: "Jun 2024 - Jul 2024",
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      achievement: "Built complete MERN stack application with 95% user satisfaction",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Gesture-Based Home Automation",
      description: "IoT system using ESP32-CAM and TinyML for gesture-controlled home automation to assist elderly individuals.",
      detailedDescription: "Developed an innovative gesture-controlled system using ESP32-CAM and TinyML to assist elderly individuals. The system triggers voice notes for essential needs through real-time gesture recognition.",
      techStack: ["Embedded Systems", "Arduino", "TinyML", "ESP32-CAM", "CNN", "C++"],
      features: [
        "Real-time gesture recognition using CNN",
        "Voice note integration with DFPlayer Mini",
        "Optimized for low-power embedded hardware",
        "Lightweight TinyML model deployment",
        "Elderly-friendly interface design"
      ],
      githubLink: "https://github.com/Goutham-02/gesture-automation",
      duration: "May 2024",
      category: "IoT/Embedded",
      image: "/api/placeholder/400/250",
      achievement: "Won Innovative Project Award at Hackathon",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Network Intrusion Detection System",
      description: "ML-based IDS using NSL-KDD dataset with 97% accuracy and optimized feature selection algorithm.",
      detailedDescription: "Developed a sophisticated IDS utilizing the NSL-KDD dataset with advanced machine learning techniques. Implemented hybrid optimization algorithms for enhanced performance and reduced computational complexity.",
      techStack: ["Machine Learning", "Python", "KNN", "SVM", "NSL-KDD", "Scikit-learn"],
      features: [
        "97% detection accuracy with KNN classifier",
        "Hybrid Hunger Games Search - Remora Optimization Algorithm",
        "35% reduction in computational complexity",
        "Comprehensive evaluation metrics",
        "Real-time threat detection capabilities"
      ],
      githubLink: "https://github.com/Goutham-02/network-ids",
      duration: "Nov 2024 - Jan 2025",
      category: "Machine Learning",
      image: "/api/placeholder/400/250",
      achievement: "Achieved 97% accuracy with 0.97 F1-score",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  const techStackColors = {
    "React.js": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "MongoDB": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    "Python": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "Machine Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Arduino": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "TinyML": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
  };

  const getTechColor = (tech) => {
    return techStackColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects spanning full-stack development, IoT, and machine learning
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                activeProject === project.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Image */}
                  <div className="lg:w-1/3">
                    <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 h-48 lg:h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-80">
                          {project.icon}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.duration}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.githubLink}
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {activeProject === project.id ? project.detailedDescription : project.description}
                    </p>

                    {/* Achievement badge */}
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.achievement}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)} hover:scale-105 transition-transform duration-200`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features - Show only when expanded */}
                    {activeProject === project.id && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium text-sm transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {activeProject === project.id ? 'Show Less' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more projects? Check out my GitHub profile for additional work and contributions.
          </p>
          <a
            href="https://github.com/Goutham-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjects;