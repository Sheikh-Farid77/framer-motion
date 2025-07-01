import { motion } from "motion/react"


export default function Sample(){
    return (
        <div className="flex flex-col justify-center items-center">
        <motion.div 
        className="h-32 w-32 rounded-full bg-red-500 border"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 2}}
        
        />
        </div>
    );
}