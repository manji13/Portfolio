"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 76 468 7979",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "manjikavi8@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "179/7F, First Lane, Weliwita road, Malabe.",
  },
];

const BubbleAnimation = () => {
  const bubbleColors = [
    "from-green-400/15 to-green-600/25 border-green-400/20",
    "from-yellow-400/15 to-yellow-600/25 border-yellow-400/20",
    "from-blue-400/15 to-blue-600/25 border-blue-400/20",
    "from-purple-400/15 to-purple-600/25 border-purple-400/20",
    "from-pink-400/15 to-pink-600/25 border-pink-400/20",
    "from-cyan-400/15 to-cyan-600/25 border-cyan-400/20",
    "from-orange-400/15 to-orange-600/25 border-orange-400/20",
    "from-teal-400/15 to-teal-600/25 border-teal-400/20",
  ];

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 30,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 15 + 15,
      color: bubbleColors[i % bubbleColors.length],
    }));
    setBubbles(generated);
  }, []);

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
            top: "110%",
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

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="relative py-6"
    >
      {/* background bubble animation */}
      <BubbleAnimation />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Im Manjitha Kavishan. I'm 23 years old. I live in Malabe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Full Stack Development</SelectItem>
                    <SelectItem value="mst">Software Engineer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea placeholder="Your Message" />

              <Button type="submit">Send Message</Button>
            </form>
          </div>

          {/* Info section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 text-white">
              {info.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="text-accent text-xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
