import React from 'react'

const About = () => {
  return (
    <main className="bg-gray-900 text-white max-w-screen-xl">
        <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:space-x-8">

            <img src="https://via.placeholder.com/150" alt="Profile" className="w-48 h-48 rounded-full" />
            
            <div className="flex-1">
                <p className="mb-6 text-gray-300">
                Hello! I'm Goutham J, a passionate Full Stack Web developer with a knack for turning complex ideas into innovative, user-friendly solutions. I've honed my skills in MERN Stack. I love blending creativity and logic to build projects that make an impact, whether it's through sleek user interfaces, efficient code, or insightful analytics. When I'm not working, you can find me playing Table tennis. I'm driven by curiosity, a love for problem-solving, and the desire to keep growing both personally and professionally
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p><span className="font-bold">Email:</span><span> gouthamshastry02@gmail.com</span></p>
                        <p><span className="font-bold">Location:</span> Bengaluru, India</p>
                        <p><span className="font-bold">Age:</span> 20</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Nationality:</span> Indian</p>
                        <p><span className="font-bold">Education:</span> Global Academy of Technology</p>
                        <p><span className="font-bold">Degree:</span> Bachelor of Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default About