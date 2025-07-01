import { motion } from "motion/react"

export default function TextMotion(){
    const text = "We Are Enjoying Reactive Accelerator Course. LWS is Awesome!!!";
    const wordArray = text.split(" ")
    return (
        <div className="text-2xl text-center m-4">
            {
                wordArray.map((word, index) => (
                    <motion.span key={index}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: index / 10}}
                    >
                        {word} {" "}
                    </motion.span>
                ) )
            }
        </div>
    );
}