import { motion } from 'framer-motion';

const PageExitAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}></motion.div>
  );
};

export default PageExitAnimation;
