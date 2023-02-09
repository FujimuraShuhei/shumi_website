import React, { useEffect } from 'react';
import { Container } from '@mantine/core';
import WorksCardParts from '../../hooks/Works/WorksCardParts';
import WorksTitle from '../../hooks/Works/WorksTitle';

const WorksCard = () => {
  return (
    <Container size="lg">
      <WorksTitle />
      <WorksCardParts />
    </Container>
  );
};

export default WorksCard;
