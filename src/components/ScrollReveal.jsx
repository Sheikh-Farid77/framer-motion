import { motion } from "motion/react"


export default function ScrollReveal() {
    const greetings = ["Hello", "Welcome", "Hola", "Come in", "Sheikh", "Farid", "Apple", "Banana"];
    return (
        <div>
            {
                greetings.map((greeting, index) => (
                    <Box key={index} text={greeting} />
                ))
            }
        </div>
    );
}

const Box = ({ text }) => {
    return (
        <motion.div className="w-56 h-56 rounded-sm bg-pink-300 text-black m-4 flex flex-col justify-center items-center font-semibold mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
                opacity: 1, x: 0, transition: {
                    duration: 0.5
                }
            }}
            viewport={{ once: true }}
        >
            {text}
        </motion.div>
    )
}