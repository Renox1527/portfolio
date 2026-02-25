import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.main
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}