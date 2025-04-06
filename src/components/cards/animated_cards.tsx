import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the type for the animated object
interface AnimatedProps {
 layout: string;
 animate: { opacity: number };
 transition: { delay: number };
 initial: { opacity: number };
}

// Define the props for the AnimatedCard component
interface AnimatedCardProps {
    title: string;
    content: string;
    imageSrc: string;
    expandedContent: string[]; // Change this to an array of strings
   }
   
   

   const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, content, imageSrc, expandedContent }) => {
    const [isExpaned, setIsExpaned] = useState<boolean>(false);
   
    const animated: AnimatedProps = {
       layout: "position",
       animate: { opacity: 1 },
       transition: { delay: 0.3 },
       initial: { opacity: 0 },
    };
   
    return (
      <motion.div
  className="card"
  layout
  onClick={() => {
    setIsExpaned(!isExpaned); // Corrected here
  }}
>
  <motion.h3 layout="position">{title}</motion.h3>
  <motion.p layout="position">{content}</motion.p>
  {isExpaned && (
    <>
      <motion.img src={imageSrc} alt="demo image" />
      <ul>
        {expandedContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <motion.div className="btn-container">
        <motion.button
          onClick={() => {
            setIsExpaned(!isExpaned); // And here
          }}
        >
          Close
        </motion.button>
      </motion.div>
    </>
  )}
</motion.div>
  );
   };
export default AnimatedCard;
