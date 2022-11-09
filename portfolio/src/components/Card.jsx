import React from "react";
import image from "../assets/projectImg/writty.jpg"
import { motion } from "framer-motion";




const Card = (props) => {

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8 card"
    >
      <a href={props.live} target="_blank" >
      <iframe
                    title={props.title}
                    width='100%'
                    height='160'
                    src={props.image}
                    frameBorder='0'
                    webkitallowfullscreen='true'
                    mozallowfullscreen='true'
                    allowFullScreen
                  ></iframe>
      </a>
      <div class="p-5">
        <a href={props.live} target="_blank">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {props.name}
          </h5>
          <h4>{props.desc}</h4>
          <ul className='flex flex-wrap'>
                    {props.TechStack.map((tech) => {
                      return (
                        <li key={tech} className='tech'>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
         
        </a>
       
        <button href={props.live} className="rounded-md" style={{boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",padding:"5px 1rem",marginTop:"5px"}}>Go To Project</button>
      </div>
    </motion.div>
  );
};

export default Card;
