import React from 'react';
import { Container } from '@mantine/core';
import WorksCardParts from '../../hooks/Works/WorksCardParts';
import WorksTitle from '../../hooks/Works/WorksTitle';

const WorksCard = () => {
  return (
    <section className='mb-20'>
      <Container size="lg">
        <WorksTitle />
        <WorksCardParts />
      </Container>
    </section>
  );
};

export default WorksCard;
