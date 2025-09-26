'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Bubble Animation Component
const BubbleAnimation = () => {
  const bubbleColors = [
    'from-green-400/15 to-green-600/25 border-green-400/20',
    'from-yellow-400/15 to-yellow-600/25 border-yellow-400/20',
    'from-blue-400/15 to-blue-600/25 border-blue-400/20',
    'from-purple-400/15 to-purple-600/25 border-purple-400/20',
    'from-pink-400/15 to-pink-600/25 border-pink-400/20',
    'from-cyan-400/15 to-cyan-600/25 border-cyan-400/20',
    'from-orange-400/15 to-orange-600/25 border-orange-400/20',
    'from-teal-400/15 to-teal-600/25 border-teal-400/20',
  ];

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 15,
    color: bubbleColors[i % bubbleColors.length],
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} backdrop-blur-sm border shadow-lg`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: '110%',
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(bubble.id * 0.5) * 150],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.3, 1, 1, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      number: "01",
      title: "Online Event Management System",
      subtitle: "Event Management Platform",
      description: "Designed and developed a modular web system using Java and MVC architecture. Implemented CRUD operations with Servlets, JDBC, and MySQL Workbench, applying OOP principles to ensure maintainability and scalability of the application while delivering efficient backend logic and structured database management.",
      techStack: "Java, OOP, MySQL, HTML, CSS, JavaScript",
      category: "Object-Oriented Programming",
      year: "2024",
      features: [
        "Event creation and management",
        "managed the databese using MqSQL Workbench", 
        "Developed a modular web system using java and MVC",
        "Implemented CRUD functionalities with backend logic"
      ]
    },
    {
      number: "02", 
      title: "Ceylon Core Management System",
      subtitle: "Enterprise Management Solution",
      description: "Full-stack enterprise management system with role-based access control, employee management, and comprehensive reporting. Built with modern MERN stack architecture for scalability and performance.",
      techStack: "React.js, Node.js, Express.js, MongoDB,Tailwind CSS",
      category: "MERN Stack Development",
      year: "2025",
      features: [
        "Role-based access control",
        "Employee management system",
        "Real-time reporting dashboard",
        "Document management and workflows",
        "leave request handling using state management",
        "Developed features for attendance marking",
        "integrated a forgot password system",
        
      ]
    },
    {
      number: "03",
      title: "Online Food Delivery System",
      subtitle: "Food Ordering Platform",
      description: "Developed a complete food ordering platform with a customer-facing UI, backend APIs, and an admin dashboard. Implemented shopping cart functionality, order placement flow, and Stripe-based payments. Built REST APIs for food item management and order tracking, designed responsive pages for browsing menus and order history, and created admin tools to manage food items and monitor real-time orders.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Stripe API",
      category: "MERN Stack Development", 
      year: "2024",
      features: [
        "Customer ordering interface",
        "complete food ordering platform with customer-facing UI",
        "shopping cart functionality",
        "order placement flow",
        "Stripe-based online payments"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="relative">
      {/* Bubble Animation Background */}
      <BubbleAnimation />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 relative z-10">
        <div className="max-w-7xl w-full flex flex-col xl:flex-row gap-[60px]">
          


          {/* Right Section - Project Content */}
          <div className="min-h-[70vh] w-full">
            <motion.div
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.3}}
              className="space-y-8"
            >
              <div className="text-center xl:text-left">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-green-400">My Projects</span>
                </h2>
                <p className="text-gray-300 text-base max-w-2xl">
                  Showcase of my development projects and technical achievements.
                </p>
              </div>

              {/* Project Card */}
              <div className="space-y-6">
                <motion.div
                  key={currentProject}
                  initial={{opacity:0, x:-20}}
                  animate={{opacity:1, x:0}}
                  transition={{duration:0.3}}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div className="flex items-center gap-6">
                        <div className="text-6xl font-thin leading-none text-white opacity-30 font-mono">
                          {project.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                            {project.title}
                          </h3>
                          <h4 className="text-base text-white font-medium mb-2">
                            {project.subtitle}
                          </h4>
                          <div className="text-green-400 text-sm font-medium">
                            {project.category} • {project.year}
                          </div>
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-green-400/20 to-yellow-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-green-400 text-sm font-medium mb-2 uppercase tracking-wide">Tech Stack</h4>
                      <p className="text-gray-400 text-sm font-medium">{project.techStack}</p>
                    </div>

                    {/* Project Features */}
                    <div>
                      <h3 className="text-green-400 text-sm font-semibold mb-4 uppercase tracking-wide">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-6">
                <button
                  onClick={previousProject}
                  className="w-12 h-12 bg-green-400 hover:bg-green-500 text-black rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg font-bold"
                >
                  <span className="text-lg">‹</span>
                </button>
                
                {/* Project Indicators */}
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentProject 
                          ? 'bg-green-400 w-6' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProject}
                  className="w-12 h-12 bg-green-400 hover:bg-green-500 text-black rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg font-bold"
                >
                  <span className="text-lg">›</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;