import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="LoadingMain"
      animate={{ x: ['-50%', '50%'] }}
      transition={{ duration: 2, delay: 1 }}
    />
  );
};

export default Loader;
