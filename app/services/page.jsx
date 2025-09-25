"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';

const services = [
{
  num: "01",
  title: "Web Development",
  Description: "I am passionate about web development, focusing on creating responsive, user-friendly, and modern websites using the latest technologies.",
  href:""
},
{
  num: "02",
  title: "Full Stack Development",
  Description: "As a full stack developer intern, I work with both frontend and backend technologies to build complete, scalable web applications.",
  href:""
},
{
  num: "03",
  title: "MERN Stack",
  Description: "I am gaining hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js) to design and develop efficient, end-to-end applications.",
  href:""
},
{
  num: "04",
  title: "Logo Design",
  Description: "I enjoy creating modern and meaningful logo designs that represent a brand's identity with simplicity and creativity. My focus is on clean, minimal, and unique designs that make a lasting impression while aligning with the client's vision.",
  href:""
},
];

import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">


        <motion.div
            initial={{opacity:0}}
           animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=> {
             return (
               <motion.div 
                 key={index} 
                 className="flex-1 flex-col justify-center gap-6 group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-8 hover:border-yellow-400/50 transition-all duration-500"
                 onMouseEnter={() => setHoveredIndex(index)}
                 onMouseLeave={() => setHoveredIndex(null)}
                 onClick={() => setHoveredIndex(index)}
                 whileHover={{ scale: 1.02, y: -5 }}
                 transition={{ duration: 0.3 }}
               >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}></div>
                
                <div className="w-full flex justify-between items-center relative z-10">
                  <div className={`text-3xl font-bold transition-all duration-300 ${
                    hoveredIndex === index ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {service.num}
                  </div>
                  <button 
                    onClick={() => toggleDetails(index)}
                    className={`transition-all duration-500 hover:scale-125 p-2 rounded-full ${
                      showDetails[index] 
                        ? 'text-yellow-400 rotate-45 bg-yellow-400/20' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                   <BsArrowDownRight className="text-2xl" />
                  </button>
                </div>
                
                <h2 className={`text-lg font-medium transition-all duration-300 ${
                  hoveredIndex === index ? 'text-yellow-400' : 'text-white'
                } font-sans leading-tight`}>
                  {service.title}
                </h2>
                
                {showDetails[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <p className="text-gray-300 mt-4 text-sm leading-relaxed font-light tracking-wide font-sans">
                      {service.Description}
                    </p>
                  </motion.div>
                )}
                
                <div className={`border-b-2 w-full transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'border-gradient-to-r from-transparent via-yellow-400 to-transparent border-yellow-400/60' 
                    : 'border-white/20'
                } relative z-10 mt-6`}></div>
             </motion.div>
             );
          })}
        </motion.div>
       </div>
    </section>
  )
}

export default Services