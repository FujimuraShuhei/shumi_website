import { motion, useAnimationControls } from 'framer-motion';
import React, { useEffect } from 'react';
import styles from './WorksCard.module.css';

const WorksTitle = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      width: ['0%', '100%'],
      overflow: 'hidden',
      opacity: [0, 100],
    });
  }, [controls]);
  return (
    <div className="mt-20 mb-10 text-center">
      <motion.h2
        animate={controls}
        transition={{ duration: 1.4 }}
        className={`"text-8xl italic mb-6" ${styles.flowing}`}>
        WORKS
      </motion.h2>
      <p className="text-xl">制作実績</p>
    </div>
  );
};

export default WorksTitle;
