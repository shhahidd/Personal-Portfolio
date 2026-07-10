import { motion } from "motion/react";

export default function Ring() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 3 }}
      className="motion-safe:animate-slow-spin hero-ring absolute aspect-square w-[250px] self-center justify-self-center rounded-full sm:w-[350px] xl:w-[500px] pointer-events-none"
    ></motion.div>
  );
}
