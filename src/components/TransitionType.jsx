import { motion } from "motion/react"

export default function TransitionType(){
    return (
        <div>
        <motion.div
        className="text-center"
        initial={{opacity: 0, x: "-100vh"}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
            <h1>Learn Animation</h1>
            <p>We Love Animation. We are enjoying it a lot. Framer Motion is Great </p>
        </motion.div>
             <motion.div
        className="text-center"
        initial={{opacity: 0, x: "+100vh"}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
            <h1>Learn Animation</h1>
            <p>We Love Animation. We are enjoying it a lot. Framer Motion is Great </p>
        </motion.div>
        </div>
    );
}