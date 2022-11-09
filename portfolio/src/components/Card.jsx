import React from "react";
import image from "../assets/projectImg/writty.jpg"
import { motion } from "framer-motion";




const Card = (props) => {
  console.log(props.image);
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
      <a href={props.live} >
        <img
          class="rounded-t-lg w-half"
          src={props.image}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {props.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.body}
        </p>
        
      </div>
    </motion.div>
  );
};

export default Card;
