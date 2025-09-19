import { motion } from 'framer-motion';

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // deslocamento menor para suavizar
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,          // levemente mais longo
        ease: [0.25, 0.1, 0.25, 1], // curva cubic bezier suave
      }}
      viewport={{ once: false, amount: 0.2 }} // dispara antes do elemento estar totalmente visível
      style={{ willChange: 'transform, opacity' }} // dica de performance
    >
      {children}
    </motion.div>
  );
}
