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
        transition={{ duration: 2 }}
        className={`"text-7xl text-slate-900 italic mb-6" ${styles.flowing}`}>
        Works
      </motion.h2>
      <p className="text-sm">制作実績</p>
    </div>
  );
};

export default WorksTitle;
