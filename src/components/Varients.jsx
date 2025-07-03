import { animate } from "motion";
import { motion } from "motion/react"

const shapeVariants = {
    initial: {
        opacity: 0,
        y: "-100vh",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            type: 'spring'
        }
    }
}

export default function Varients() {
    return (
        <motion.div
            variants={shapeVariants}
            initial="initial"
            animate="animate"
            className="bg-green-600 w-32 h-32 border">

        </motion.div>
    );
}