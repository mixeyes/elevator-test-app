import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allBuildings } from '../stores';
import { Container, Label } from './commonPageStyles';
import { SelectBuildings } from '../components';
import { BuildingContainer } from '../modules';

const ElevatorsPage = () => {
  const buildings = useSelector(allBuildings);


  return (
    <Container>
      <Label>Elevators page</Label>
      <SelectBuildings buildings={buildings}/>
      <BuildingContainer />
    </Container>
  );
};

export default ElevatorsPage;
