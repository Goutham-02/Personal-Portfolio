import React from 'react'
import pic from '../assets/pic.png';

const Home = () => {
    return (
        <main className="bg-gray-900 min-h-screen">
            <div className="flex flex-row items-center justify-center h-screen gap-8">
                <img src={pic} alt="Goutham J" className="rounded-full h-32 w-32" />
                <div className="flex flex-col">
                    <h1 className="text-slate-200 text-7xl font-bold"><span>Goutham</span><span className="text-red-500"> J</span></h1>
                    <h3 className="text-slate-200 text-xl font-medium pt-4 pr-4 pb-4 pl-2">I am a Web Developer.</h3>
                </div>
            </div>
        </main>
    )
}

export default Home