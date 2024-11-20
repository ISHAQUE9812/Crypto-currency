import React from 'react'
import {motion} from 'framer-motion'
const Marquee = ({images, direction}) => {
  return (
    <div className="flex  w-full  overflow-hidden ">
    <motion.div
      initial={{ x: "0" }}
      animate={{ x: '-50%' }}
      transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      className="flex flex-shrink-0 gap-10 py-10  pr-20 "
    >
      {images.map((url, index) => (
        <img key={index} src={url} className="w-20" />
      ))}
    </motion.div>
   
  </div>
  )
}

export default Marquee