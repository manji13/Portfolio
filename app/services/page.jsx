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
  Description: "I enjoy creating modern and meaningful logo designs that represent a brand’s identity with simplicity and creativity. My focus is on clean, minimal, and unique designs that make a lasting impression while aligning with the client’s vision.",
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
      <div className="container mx-auto">
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
               <div 
                 key={index} 
                 className="flex-1 flex-col justify-center gap-6 group cursor-pointer"
                 onMouseEnter={() => setHoveredIndex(index)}
                 onMouseLeave={() => setHoveredIndex(null)}
                 onClick={() => setHoveredIndex(index)}
               >
                <div className="w-full flex justify-between items-center">
                  <div className={`text-5xl font-extrabold transition-all duration-300 ${
                    hoveredIndex === index ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {service.num}
                  </div>
                  <button 
                    onClick={() => toggleDetails(index)}
                    className={`transition-all duration-300 hover:scale-110 ${
                      showDetails[index] ? 'text-yellow-400 rotate-45' : 'text-white'
                    }`}
                  >
                   <BsArrowDownRight className="text-2xl" />
                  </button>
                </div>
                
                <h2 className={`transition-all duration-300 ${
                  hoveredIndex === index ? 'text-yellow-400' : 'text-white'
                }`}>
                  {service.title}
                </h2>
                
                {showDetails[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 mt-4">{service.Description}</p>
                  </motion.div>
                )}
                
                <div className="border-b border-white/20 w-full"></div>
             </div>
             );
          })}
        </motion.div>
       </div>
    </section>
  )
}

export default Services