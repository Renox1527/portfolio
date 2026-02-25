import Skills from "../components/Skills";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";


export default function Home({ texts }) {
  return (
    <PageWrapper>
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {texts.home.title}
        
      </motion.h1>

      <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {texts.home.subtitle}
        </motion.p>

        <Skills texts={texts} />

      {/* <main className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {texts.home.title}
        </motion.h1>

        
      </main> */}
    </PageWrapper>
  );
}

