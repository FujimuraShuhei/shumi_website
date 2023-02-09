import { Container } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, width: 400 }}
        animate={{ opacity: 1, width: 800 }}
        className={styles.LoadingMain}
        transition={{ type: 'spring', velocity: 2 }}>
        <motion.h1
          className={styles.mainh1}
          transition={{ duration: 5, delay: 1 }}>
          これがタイトル
        </motion.h1>
      </motion.div>
    </Container>
  );
};

export default Loader;
