import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Science and Engineering",
      institution: "Global Academy of Technology",
      duration: "2022 - 2026",
      score: "8.74 CGPA",
      status: "Ongoing",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Specialized in Software Engineering and Data Structures",
        "Active participant in technical events and hackathons",
        "Led multiple project teams and technical initiatives"
      ],
      relevantCourses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Machine Learning",
        "Software Engineering",
        "Computer Networks"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "Pre-University Course",
      field: "Science (PCMB)",
      institution: "Sarvodaya PU College",
      duration: "2020 - 2022",
      score: "94%",
      status: "Completed",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Excellent performance in Mathematics and Computer Science",
        "Active participation in science exhibitions",
        "Developed strong analytical and problem-solving skills"
      ],
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      degree: "Secondary Education",
      field: "SSLC",
      institution: "Vidyaniketan High School",
      duration: "2019 - 2020",
      score: "91%",
      status: "Completed",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Strong foundation in core subjects",
        "Participated in various academic competitions",
        "Developed interest in technology and programming"
      ],
      relevantCourses: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi",
        "Computer Applications"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistent high performance across all education levels",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-500"
    },
    {
      title: "Technical Leadership",
      description: "Led eYRC IIT-B team and multiple project initiatives",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-500"
    },
    {
      title: "Research & Innovation",
      description: "Won Innovative Project Award for gesture recognition system",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Academic Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className={`${achievement.color} mb-3 flex justify-center`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="relative">
            
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <div key={index} className="relative">
                  
                  {/* Education Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700 overflow-hidden">
                    {/* Gradient header */}
                    <div className={`h-2 bg-gradient-to-r ${education.color}`}></div>
                    
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                              {education.degree}
                            </h3>
                          </div>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                            {education.field}
                          </p>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                            {education.institution}
                          </p>
                        </div>
                        
                        <div className="lg:text-right mt-4 lg:mt-0">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                            education.status === 'Ongoing' 
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                          }`}>
                            {education.status}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {education.duration}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <MapPin className="w-4 h-4 mr-2" />
                            {education.location}
                          </div>
                        </div>
                      </div>

                      {/* Score Display */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 text-center">
                        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                          {education.score}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Academic Performance
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Key Highlights
                        </h4>
                        <div className="space-y-2">
                          {education.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Relevant Courses */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {education.relevantCourses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;