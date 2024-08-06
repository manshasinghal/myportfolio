import React from "react";
import { motion } from 'framer-motion';
import profile from './Pictures/profile.jpeg';
import {pattern} from './Pictures/pattern.png'
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function About() {
  return (
    <div className="pt-44 bg-black text-white pl-20 pr-11 flex justify-between items-center bg-pattern " id='about'>
<div className="relative w-[350px] h-[500px] ml-[100px]">
  <div className="relative w-full h-full group">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out opacity-60 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-xl"
      src={profile}
      alt="Profile Picture"
    />
  

  </div>
</div>
<motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
      <div className="max-w-lg  mr-[220px] mt-[-50px]">
        <div className="p-8 rounded-xl bg-gray-500 w-[650px] h-[600px] bg-opacity-70 shadow-lg border-2 border-black">
         <div
             className="text-6xl font-bold font-mono">
            
              <h1 className="text-6xl font-bold font-mono">ABOUT ME</h1>
           </div> 

          <p className="pt-16 text-orange-400 text-lg mt-[-40px]">Hello there, I'm so happy you are here!</p>
          <div className="font-medium text-base pt-8">
          
              <p>
              I’m a passionate full stack developer with a keen interest in crafting visually stunning and user-friendly websites that make a lasting impact. My dedication to problem-solving shines through my rigorous practice of Data Structures and Algorithms (DSA), which enables me to write efficient code and deepen my understanding of programming principles.
              </p>
          
            
              <p className="mt-8">
              Beyond my professional pursuits, I indulge in drawing during my free time, am an avid book lover, and enjoy dancing for fun. These hobbies keep me inspired and energized, fueling my creativity and innovation.              </p>
           
             
              <p className="mt-8">
              Thank you for visiting my portfolio—I’m excited to connect and share my journey with you!              </p>
            
              <div className="mt-8">
                <a href="https://drive.google.com/file/d/1lrtY5lZb_c0kUONZWu2DqmOFmYIXhApN/view?usp=sharing" className="inline-block border-2 border-orange-700 rounded-2xl p-2 w-32 bg-orange-700 text-black font-bold transition-transform transform hover:-translate-y-1">
                  Check My CV
                </a>
              </div>
            
          </div>
        </div>
      </div>
      </motion.div>
     
    </div>
  );
}
