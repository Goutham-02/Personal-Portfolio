import { Award, Trophy, FileText, ExternalLink, Star, Users, Code } from 'lucide-react';

const AchievementsAndCertifications = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "eYRC IIT-B Team Leadership",
      description: "Led eYRC, IIT-B team through Task 4, showcasing strong leadership and technical skills.",
      category: "Leadership",
      year: "2024",
      color: "bg-purple-500"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Innovative Project Award",
      description: "Won the Innovative Project Award for a Gesture recognition Home automation in a Hackathon.",
      category: "Innovation",
      year: "2024",
      color: "bg-yellow-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "300+ LeetCode Problems",
      description: "Solved 300+ problems on LeetCode and GeeksforGeeks, demonstrating strong algorithmic skills.",
      category: "Technical",
      year: "Ongoing",
      color: "bg-green-500"
    }
  ];

  const certifications = [
    {
      title: "Backend Development and APIs",
      provider: "FreeCodeCamp",
      icon: <FileText className="w-6 h-6" />,
      year: "2024",
      verified: true
    },
    {
      title: "Networking Basics",
      provider: "Cisco",
      icon: <FileText className="w-6 h-6" />,
      year: "2024",
      verified: true
    },
    {
      title: "Machine Learning with Python",
      provider: "Coursera",
      icon: <FileText className="w-6 h-6" />,
      year: "2024",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Achievements Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Award className="w-7 h-7 mr-3 text-yellow-500" />
              Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${achievement.color} text-white p-3 rounded-full mr-4`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {achievement.category}
                        </span>
                        <div className="text-sm text-gray-400 dark:text-gray-500">
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {/* Star rating for visual appeal */}
                    <div className="flex items-center mt-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <FileText className="w-7 h-7 mr-3 text-blue-500" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="relative p-6">
                    {/* Verified badge */}
                    {cert.verified && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Verified
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-3 rounded-full mr-4">
                        {cert.icon}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.year}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.provider}
                      </p>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                  
                  {/* Animated bottom border */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;