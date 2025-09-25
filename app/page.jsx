import React from 'react'
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';


import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-28 gap-10">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent font-medium tracking-wide">
              Software Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Hello I'm <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 animate-pulse">
                Manjitha Kavishan
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-gray-300 font-serif italic tracking-wide leading-relaxed text-lg">
              Full Stack Software Engineer intern, experienced in MERN stack, OOP, and MySQL.
              I enjoy creating user-friendly web applications and continuously improving my skills.
            </p>
            
            {/* Row: Download CV + GitHub + LinkedIn */}
            <div className="flex flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href='ManjithaKavishan.pdf' download="ManjithaKavishan.pdf">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
                </a>
              </Button>

              <Social 
                containerStyles="flex gap-4"
                iconStyles="w-9 h-9 flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;
