'use client';

import React, { useState } from 'react';

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
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-7xl w-full flex items-center justify-between gap-20">
        
        {/* Left Section */}
        <div className="flex-1 max-w-xl">
          {/* Large Project Number */}
          <div className="text-[10rem] font-thin leading-none text-white opacity-8 mb-6 font-mono">
            {project.number}
          </div>
          
          {/* Project Title */}
          <h1 className="text-4xl font-semibold mb-4 leading-tight text-gray-100">
            {project.title}
          </h1>
          
          {/* Category */}
          <div className="text-emerald-400 text-lg font-medium mb-6">
            {project.category} • {project.year}
          </div>
          
          {/* Project Description */}
          <p className="text-gray-300 leading-relaxed mb-8 text-base">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-emerald-400 text-sm font-medium mb-2">TECH STACK</h3>
            <p className="text-gray-400 text-base">{project.techStack}</p>
          </div>
          
          {/* Action Links */}
          <div className="flex gap-4">
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400 hover:bg-opacity-10 transition-all duration-300 cursor-pointer group">
              <span className="text-lg group-hover:text-emerald-400 transition-colors">↗</span>
            </div>
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400 hover:bg-opacity-10 transition-all duration-300 cursor-pointer group">
              <span className="text-lg group-hover:text-emerald-400 transition-colors">⚡</span>
            </div>
          </div>
        </div>

        {/* Right Section - Project Card */}
        <div className="flex-1 relative max-w-lg">
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.subtitle}
                </h2>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">{project.year}</div>
                <div className="text-xs text-gray-500">PROJECT</div>
              </div>
            </div>

            {/* Project Features */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Key Features</h3>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Technologies Used</h4>
              <p className="text-gray-600 text-sm font-medium">{project.techStack}</p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                View Project Details
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 right-0 flex gap-3">
            <button
              onClick={previousProject}
              className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <span className="text-lg">‹</span>
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <span className="text-lg">›</span>
            </button>
          </div>

          {/* Project Indicator */}
          <div className="absolute -bottom-16 left-0 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentProject 
                    ? 'bg-emerald-400 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;