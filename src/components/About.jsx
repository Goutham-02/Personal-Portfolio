import React from "react"

export default function About() {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">About Me</h1>
          
          <div className="mb-12 grid gap-8 md:grid-cols-[300px,1fr]">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
              I am a motivated Computer Science student skilled in C++, Python, and web development with the MERN stack. With strong foundations in DSA, OOPS, database management, and control systems, I excel at solving complex problems. My projects include a gesture-detection-based home automation system and balancing robots using control systems and CoppeliaSim. I participated in the prestigious e-Yantra Robotics Competition, honing my robotics and teamwork skills. Outside academics, I enjoy playing table tennis, which enhances my focus and agility.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p><span className="font-semibold text-white">Email:</span> gouthamshastry02@gmail.com</p>
                  <p><span className="font-semibold text-white">Location:</span> Bengaluru, India</p>
                  <p><span className="font-semibold text-white">Age:</span> 20</p>
                </div>
                <div>
                  <p><span className="font-semibold text-white">Nationality:</span> Indian</p>
                  <p><span className="font-semibold text-white">Education:</span> Global Academy of Technology</p>
                  <p><span className="font-semibold text-white">Degree:</span> Bachelor of Engineering</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-pink-500">5+</p>
              <p className="text-gray-300">Years of Coding experience</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-pink-500">15+</p>
              <p className="text-gray-300">Completed projects</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <p className="mb-2 text-4xl font-bold text-pink-500">5+</p>
              <p className="text-gray-300">Hackathons or Competitions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  