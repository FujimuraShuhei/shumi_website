import React, { useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import works1 from '/public/images/works1.jpg';
import { Container } from '@mantine/core';
import { motion, useAnimationControls } from 'framer-motion';
import styles from './WorksCard.module.css';
import WorksCardParts from '../../hooks/Works/WorksCardParts';

const WorksCard = () => {
  const controls = useAnimationControls();
  const cardFade = useAnimationControls();

  useEffect(() => {
    controls.start({
      width: ['0%', '100%'],
      overflow: 'hidden',
      opacity: [0, 100],
    });
  }, [controls]);

  useEffect(() => {
    cardFade.start({
      type: 'spring',
      transition: { duration: 3 },
    });
  }, [cardFade]);

  return (
    <Container size="lg">
      <div className="mt-20 mb-10">
        <motion.h2
          animate={controls}
          transition={{ duration: 2 }}
          className={`"text-7xl text-slate-900 italic mb-6" ${styles.flowing}`}>
          Works
        </motion.h2>
        <p className="text-sm">制作実績</p>
      </div>
      <WorksCardParts />
    </Container>
  );
};

export default WorksCard;
