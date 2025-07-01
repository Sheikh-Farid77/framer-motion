import { motion } from "motion/react"

export default function KeyFrame(){
    return (
        <motion.div className="w-32 h-32 bg-blue-500 m-4"
        animate={{
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            scale: [1, 1, 2, 2, 1]
        }}
        transition={{duration: 2}}
        
        />

        
    );
}