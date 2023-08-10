import { motion } from 'framer-motion';

const PageEnterAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}></motion.div>
  );
};

export default PageEnterAnimation;
