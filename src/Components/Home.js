import React from 'react';
import { List3 } from './List3';
import { Link } from 'react-scroll';
import className from 'classnames';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './Home.css';
import pic from './Pictures/pic1.webp';
import { motion } from 'framer-motion';

export default function Home() {
  const InputClasses = className('mt-1 mr-4 text-4xl lg:text-2xl hover:translate-y-[-2px] ease-in duration-300');
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full stack developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="w-full pt-44 pb-20 flex flex-col gap-10 xl:gap-0 bg-opacity-70  shadow-lg lg:flex-row bg-black ">
        <div className="w-full lg:w-1/2 flex flex-col gap-10 pt-20 pl-12 ml-44">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold text-white whitespace-nowrap">
              Hi, I'm <span className="capitalize text-orange-400 ">Mansha Singhal</span>
            </h1>
            <h2 className="text-5xl font-bold text-white">
              a <span>{text}</span>
              <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="orange" />
            </h2>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
              <div className="flex gap-4 text-white">
                {List3.map(({ icon, link }) => (
                  <a key={link} className={InputClasses} href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
                ))}
              </div>
              <div>
              <Link to='contact' smooth={true} duration={500}>
        <button className='move mt-9 border-orange-400 border-2 rounded-md p-4 lg:p-2 text-white w-[100px] bg-transparant  ease-in duration-300  hover:bg-orange-400 hover:text-black'>Let's Talk</button>
</Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
