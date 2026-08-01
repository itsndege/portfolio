import { motion } from "motion/react";

function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;