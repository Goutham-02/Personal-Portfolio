import React from 'react';

const Card = ({ children, className, ...props }) => (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
        {children}
    </div>
);

const CardContent = ({ children, className, ...props }) => (
    <div className={`p-6 ${className}`} {...props}>
        {children}
    </div>
);

export default function Projects() {
    const projects = [
        {
            title: "TextUtils",
            period: "June 2024",
            link: "https://text-editor-utilities.vercel.app/",
            description: "Developed a dynamic UI with React, React RouterDOM, hooks for state management, and implemented text transformation features."
        },
        {
            title: "myNotes",
            period: "July 2024",
            link: "https://github.com/Goutham-02/my-notes",
            description: "Developed a responsive UI with React, Bootstrap; backend with Node.js, Express, MongoDB; integrated RESTful APIs and JWT authentication."
        },
        {
            title: "DailyNewsPaper",
            period: "June 2024",
            link: "https://github.com/Goutham-02/DailyNewsPaper-A-news-app",
            description: "Built a dynamic news app with API integration, offering categorized news and seamless navigation through an intuitive UI using React Router."
        },
        {
            title: "Gesture-Based Home Automation",
            period: "June 2024",
            link: "https://github.com/Goutham-02/Home-Automation-using-Gesture-recognition",
            description: "Gesture Aid empowers disabled individuals with IoT based hand gesture-controlled home automation, using ESP32, camera, Python."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-gray-900 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
                    <div className="w-16 h-1 bg-rose-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <a href={project.link} target='_blank'>
                            <Card key={index} className="transition bg-gray-800 border-zinc-700 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
                                <CardContent>
                                    <h3 className="text-xl font-semibold text-rose-500 mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 mb-4">
                                        {project.period}
                                    </p>
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

