"use client";

import { Description } from '@radix-ui/react-dialog';
import { info } from 'autoprefixer';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGraduationCap,
  FaUser,
  FaCogs,
  FaJava,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa';

import {SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMysql} from 'react-icons/si';

const about = {
  title: "About me",
  description: "Passionate software engineer student with a focus on modern web development and user experience design.",
  info:[
    {
      fieldname:"Name",
      fieldValue:"Manjitha Kavishan",
    },
    {
      fieldname:"Phone",
      fieldValue:"(+94) 76 468 7979",
    },
    {
      fieldname:"Nationality",
      fieldValue:"Sri Lankan",
    },
    {
      fieldname:"Email",
      fieldValue:"manjikavi8@gmail.com",
    },
    {
      fieldname:"Languages",
      fieldValue:"English , Sinhala",
    },
  ]
};

const education = {
  icon: <FaGraduationCap />,
  title:"My Education",
  description:"My academic journey and qualifications in software engineering.",
  items:[
    {
      institution:"Sri Lanka Institute Of Information Technology (SLIIT)",
      degree:"Bachelor of Software Engineering",
      duration:"2023 - Present",
      description: "Pursuing comprehensive software engineering education with focus on modern development practices and technologies."
    },
  ]
};

const skills ={
  title:"My Skills",
  description:"Technologies and tools I work with to create amazing digital experiences.",
  skillList:[
    {
      icon: <FaHtml5 />,
      name:"HTML 5",
      level: "Advanced",
      color: "text-orange-500"
    },
    {
      icon: <FaCss3 />,
      name:"CSS 3",
      level: "Advanced", 
      color: "text-blue-500"
    },
    {
      icon: <FaJs />,
      name:"JavaScript",
      level: "Intermediate",
      color: "text-yellow-500"
    },
    {
      icon: <FaReact />,
      name:"React.js",
      level: "Intermediate",
      color: "text-cyan-500"
    },
    {
      icon: <SiNextdotjs />,
      name:"Next.js",
      level: "Intermediate",
      color: "text-white"
    },
    {
      icon: <SiTailwindcss />,
      name:"Tailwind CSS",
      level: "Advanced",
      color: "text-teal-500"
    },
    {
      icon: <FaNodeJs />,
      name:"Node.js",
      level: "Beginner",
      color: "text-green-500"
    },
    {
      icon: <FaFigma />,
      name:"Figma",
      level: "Intermediate",
      color: "text-purple-500"
    },
    {
      icon: <FaJava />,
      name:"Java",
      level: "Intermediate",
      color: "text-red-500"
    },
    {
      icon: <FaPhp />,
      name:"PHP",
      level: "Intermediate",
      color: "text-indigo-400"
    },
    {
      icon: <SiMysql />,
      name:"MySQL",
      level: "Intermediate",
      color: "text-blue-400"
    },
    {
      icon: <SiMongodb />,
      name:"MongoDB",
      level: "Beginner",
      color: "text-green-600"
    },
    {
      icon: <SiExpress />,
      name:"Express.js",
      level: "Beginner",
      color: "text-gray-300"
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from '@radix-ui/react-scroll-area';
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
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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

const Resume = () => {
  return (
    <div className="relative">
      {/* Bubble Animation Background */}
      <BubbleAnimation />
      
      <motion.div 
        initial={{opacity:0}} 
        animate={{
          opacity:1, 
          transition:{delay:0.4, duration:0.4, ease:"easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 relative z-10"
      >
        <div className="container mx-auto px-4">
          <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
            
            {/* Tab Navigation */}
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent h-auto p-0">
              <TabsTrigger 
                value="education" 
                className="w-full justify-start gap-4 text-left py-4 px-6 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-yellow-400 data-[state=active]:text-black data-[state=active]:border-green-400 hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaGraduationCap className="text-xl" />
                <div>
                  <div className="font-semibold">Education</div>
                  <div className="text-sm opacity-70">Academic Background</div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="skills" 
                className="w-full justify-start gap-4 text-left py-4 px-6 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-yellow-400 data-[state=active]:text-black data-[state=active]:border-green-400 hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaCogs className="text-xl" />
                <div>
                  <div className="font-semibold">Skills</div>
                  <div className="text-sm opacity-70">Technical Expertise</div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="about" 
                className="w-full justify-start gap-4 text-left py-4 px-6 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-yellow-400 data-[state=active]:text-black data-[state=active]:border-green-400 hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaUser className="text-xl" />
                <div>
                  <div className="font-semibold">About Me</div>
                  <div className="text-sm opacity-70">Personal Information</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="min-h-[70vh] w-full">
              
              {/* Education Tab */}
              <TabsContent value="education" className="w-full">
                <motion.div
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:0.3}}
                  className="space-y-8"
                >
                  <div className="text-center xl:text-left">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <FaGraduationCap className="text-green-400" />
                      {education.title}
                    </h2>
                    <p className="text-gray-300 text-base max-w-2xl">
                      {education.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity:0, x:-20}}
                        animate={{opacity:1, x:0}}
                        transition={{duration:0.3, delay:index * 0.1}}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-start flex-wrap gap-4">
                            <div>
                              <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                                {item.degree}
                              </h3>
                              <h4 className="text-base text-white font-medium">
                                {item.institution}
                              </h4>
                            </div>
                            <span className="bg-gradient-to-r from-green-400/20 to-yellow-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="w-full">
                <motion.div
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:0.3}}
                  className="space-y-8"
                >
                  <div className="text-center xl:text-left">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <FaCogs className="text-green-400" />
                      {skills.title}
                    </h2>
                    <p className="text-gray-300 text-base max-w-2xl">
                      {skills.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity:0, scale:0.8}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.3, delay:index * 0.1}}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                                <div className="flex flex-col items-center gap-4">
                                  <div className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                  </div>
                                  <div className="text-center">
                                    <h3 className="text-white font-medium text-sm">
                                      {skill.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs mt-1">
                                      {skill.level}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name} - {skill.level}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* About Tab */}
              <TabsContent value="about" className="w-full">
                <motion.div
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:0.3}}
                  className="space-y-8"
                >
                  <div className="text-center xl:text-left">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <FaUser className="text-green-400" />
                      {about.title}
                    </h2>
                    <p className="text-gray-300 text-base max-w-2xl">
                      {about.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {about.info.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity:0, x:-20}}
                        animate={{opacity:1, x:0}}
                        transition={{duration:0.3, delay:index * 0.1}}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 font-medium">
                            {item.fieldname}:
                          </span>
                          <span className="text-white text-right">
                            {item.fieldValue}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume