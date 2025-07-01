import { motion } from "motion/react"

export default function ButtonTap() {
    return (
        <div className="flex flex-col justify-center items-center">

            <motion.button
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                className="bg-purple-700 px-4 py-1 rounded-sm text-white font-semibold mt-4 cursor-pointer"
            >
                Tap Me
            </motion.button>
            <motion.button
                whileTap={{ scale: 0.5 }}
                whileHover={{
                    scale: 1.3,
                    transition: { yoyo: Infinity }
                }}
                className="bg-purple-700 px-4 py-1 rounded-sm text-white font-semibold mt-4 cursor-pointer"
            >
                Tap Me
            </motion.button>
        </div>
    );
}