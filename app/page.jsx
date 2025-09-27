import React from 'react'
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Glacier Background */}
      <div className="absolute inset-0">
        {/* Deep Arctic Ocean Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950"></div>
        
        {/* Layered Ice Formations */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/30 via-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/40 via-transparent to-cyan-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-950/50 via-transparent to-slate-900/40"></div>
        
        {/* Dynamic Aurora Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-400/10 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-emerald-500/5 via-cyan-500/8 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        
        {/* Ice Crystal Particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-300/40 rounded-full animate-bounce shadow-lg shadow-cyan-300/20" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-blue-200/50 rounded-full animate-bounce shadow-md shadow-blue-200/30" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-64 left-1/3 w-2.5 h-2.5 bg-cyan-400/35 rounded-full animate-bounce shadow-lg shadow-cyan-400/25" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce shadow-md shadow-blue-300/20" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-cyan-200/45 rounded-full animate-bounce shadow-sm shadow-cyan-200/35" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-teal-300/60 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-cyan-500/25 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5.5s' }}></div>
        
        {/* Massive Glacier Formations */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-cyan-900/40 via-blue-800/20 to-transparent transform rotate-1 shadow-2xl shadow-cyan-900/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-slate-800/50 via-cyan-900/25 to-transparent transform -rotate-1 shadow-xl shadow-slate-800/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-900/30 via-blue-900/15 to-transparent transform rotate-0.5 shadow-lg shadow-indigo-900/30"></div>
        
        {/* Ice Surface Reflections */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyan-400/10 via-blue-500/5 to-transparent backdrop-blur-sm"></div>
        
        {/* Animated Ice Shards */}
        <div className="absolute top-1/4 left-1/4 w-8 h-1 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent rotate-45 animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent rotate-12 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-10 h-0.5 bg-gradient-to-r from-transparent via-teal-300/25 to-transparent -rotate-30 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        
        {/* Distant Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-gradient-to-t from-slate-900/60 to-transparent transform skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-gradient-to-t from-blue-900/50 to-transparent transform -skew-x-6"></div>
        <div className="absolute bottom-0 left-1/2 w-1/5 h-40 bg-gradient-to-t from-cyan-900/40 to-transparent transform skew-x-3"></div>
      </div>

      {/* Frosted glass navigation overlay */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="backdrop-blur-md bg-gradient-to-r from-cyan-950/20 via-blue-950/30 to-slate-950/20 border-b border-cyan-400/20">
          <div className="container mx-auto px-6 py-4">
            {/* You can add navigation items here if needed */}
            <div className="flex items-center justify-between">
              <div className="text-cyan-300/80 font-semibold text-lg tracking-wider">
                Portfolio
              </div>
              {/* Navigation items would go here */}
              <div className="hidden md:flex space-x-8 text-cyan-200/70">
                {/* Example nav items */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto h-full min-h-screen">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-32 xl:pb-28 gap-10 px-6">

          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Glacial badge */}
            <div className="inline-flex items-center mb-6">
              <span className="relative px-6 py-2 text-lg text-cyan-300 font-medium tracking-wide">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-400/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent rounded-full animate-pulse"></div>
                <span className="relative flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  Software Developer
                </span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-white drop-shadow-2xl">Hello I'm</span>
              <br /> 
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 drop-shadow-lg">
                  Manjitha Kavishan
                </span>
                {/* Icy glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 blur-2xl -z-10 animate-pulse"></div>
              </span>
            </h1>

            {/* Frosted glass description container */}
            <div className="relative mb-10 max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-slate-900/20 rounded-2xl backdrop-blur-sm border border-cyan-400/20"></div>
              <p className="relative p-6 text-cyan-100/90 font-serif italic tracking-wide leading-relaxed text-lg">
                Full Stack Software Engineer intern, experienced in MERN stack, OOP, and MySQL.
                I enjoy creating user-friendly web applications and continuously improving my skills.
              </p>
            </div>
            
            {/* Glacier-styled action section */}
            <div className="flex flex-row items-center gap-8">
              {/* Icy Download Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400/50 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-500 rounded-xl px-8 py-4 text-lg font-semibold tracking-wide shadow-2xl"
                >
                  <a href='ManjithaKavishan.pdf' download="ManjithaKavishan.pdf" className="flex items-center gap-3">
                    <span>Download CV</span>
                    <FiDownload className="text-xl group-hover:animate-bounce" />
                  </a>
                </Button>
              </div>

              {/* Frosted Social Container */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl backdrop-blur-sm border border-cyan-400/20"></div>
                <Social 
                  containerStyles="relative flex gap-4 p-3"
                  iconStyles="w-12 h-12 flex justify-center items-center text-cyan-300 text-xl hover:bg-cyan-400/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-500 rounded-xl backdrop-blur-sm border border-cyan-400/30"
                />
              </div>
            </div>
          </div>

          {/* Photo with Glacier Frame */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full backdrop-blur-sm border-2 border-cyan-400/30"></div>
            <div className="relative">
              <Photo />
            </div>
            {/* Floating ice crystals around photo */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-300/60 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400/50 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-teal-300/70 rounded-full animate-pulse"></div>
          </div>

        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative z-20">
        <div className="backdrop-blur-md bg-gradient-to-r from-slate-900/40 via-cyan-950/30 to-blue-950/40 border-t border-cyan-400/20">
          <Stats />
        </div>
      </div>

      {/* Bottom glacier effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-950/30 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Home;