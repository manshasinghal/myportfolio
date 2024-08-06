import React from "react";
import l1 from "./Pictures/C++.png";
import './skills.css'
// import l2 from "./Pictures/C.png";
// import l3 from "./Pictures/css.svg";
// import l4 from "./Pictures/Html.png";
// import l5 from "./Pictures/js.png";
// import l6 from "./Pictures/python.png";
// import l7 from "./Pictures/mongodb.svg";
// import l8 from "./Pictures/express.webp";
// import l9 from "./Pictures/node.webp";
// import l10 from "./Pictures/react.png";
// import l11 from "./Pictures/tailwind.svg";
// import { motion } from "framer-motion";
// import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Skills() {
 
    return (
    <div className="bg-black w-full h-screen pt-24 pl-4 lg:pl-12  "  id='skills'>
    
        <div>
        <div>
       
          <h2 className="text-slate-400 text-xl font-bold mb-4 ml-[30px]">Skills</h2>
          <h1 className="text-white font-semibold text-[40px] mb-4 ml-[30px]">
            Technical Skills
          </h1> 
         
          </div>
          <div className="section" >
  <div className="straight">
    <div className="skill-box">
      <span className="title">HTML</span>
      <div className="skill-bar">
        <span className="skill-per html">
          <span className="tooltip">95%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">CSS</span>
      <div className="skill-bar">
        <span className="skill-per css">
          <span className="tooltip">80%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">JavaScript</span>
      <div className="skill-bar">
        <span className="skill-per javascript">
          <span className="tooltip">60%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">NodeJS</span>
      <div className="skill-bar">
        <span className="skill-per nodejs">
          <span className="tooltip">40%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">ReactJS</span>
      <div className="skill-bar">
        <span className="skill-per reactjs">
          <span className="tooltip">70%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">ExpressJS</span>
      <div className="skill-bar">
        <span className="skill-per expressjs">
          <span className="tooltip">75%</span>
        </span>
      </div>
    </div>
  </div>
  <div className="circular">
    <h1 className="heading1  mt-[-75px] text-3xl ml-[300px] font-bold">Other Skills</h1>
  <div className="radial-bars flex flex-row mt-[120px] ml-[140px] ">
    <div className="flex flex-col">
      <div className="radial-bar ">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-1" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">80%</div>
        <div className="text text-lg">Data Structures <br></br>& Algorithms</div>
      </div>
      <div className="radial-bar mt-[130px]">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-2" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">90%</div>
        <div className="text text-lg">C++</div>
      </div>
    </div>

    <div className="flex flex-col">
      <div className="radial-bar ml-[100px] ">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-3" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">80%</div>
        <div className="text text-lg">Tailwind Css</div>
      </div>
      <div className="radial-bar ml-[100px] mt-[130px]">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-4" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">80%</div>
        <div className="text text-lg">MySQL</div>
      </div>
      </div>
      <div className="flex flex-col">
      <div className="radial-bar ml-[130px]">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-5" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">75%</div>
        <div className="text text-lg">MONGODB</div>
      </div>
      <div className="radial-bar  mt-[130px] ml-[100px]">
        <svg x="0px" y="0px" viewBox="0 0 250 250">
          <circle className="progress-bar" cx="125" cy="125" r="100"></circle>
          <circle className="path path-6" cx="125" cy="125" r="100"></circle>
        </svg>
        <div className="per text-lg">60%</div>
        <div className="text text-lg">Restful API</div>
      </div>
      </div>
     
    </div>
  </div>
</div>

</div>



        </div>
     
   
  );
}
