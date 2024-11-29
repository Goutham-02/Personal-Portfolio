import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";

const Contact = () => {
    return (
        <section className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-16 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                    Contact
                    <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-rose-500"></span>
                </h2>

                <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto">
                    I am currently seeking an Internship, so if you have a job or project offer, or if you need more information, please do not hesitate to contact me.
                </p>

                <button
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300"
                >
                    Write Message
                </button>

                <div className="flex justify-center gap-6 pt-8">
                    <a href="https://github.com/Goutham-02" target="_blank" className="text-zinc-300 hover:text-white transition-colors">
                        <FaGithub className="w-6 h-6" />
                        <span className="sr-only">GitHub Profile</span>
                    </a>
                    <a href="www.linkedin.com/in/goutham002" target="_blank" className="text-zinc-300 hover:text-white transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn Profile</span>
                    </a>
                    <a href="https://www.instagram.com/goutham_shastry/" target="_balnk" ClassName="text-zinc-300 hover:text-white transition-colors">
                        <FaInstagram className="w-6 h-6" />
                        <span className="sr-only">Instagram Profile</span>
                    </a>
                    <a href="mailto:gouthamshastry02@gmail.com" target="_blank" className="text-zinc-300 hover:text-white transition-colors">
                        <SiGmail className="w-6 h-6" />
                        <span className="sr-only">Gmail</span>
                    </a>
                    <a href="tel:+917892968651" target="_blank" className="text-zinc-300 hover:text-white transition-colors">
                        <MdCall className="w-6 h-6" />
                        <span className="sr-only">Call</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact