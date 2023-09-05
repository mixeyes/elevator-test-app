import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allBuildings } from '../stores';
import { Container, Label } from './configPageStyles';
import { ItemList, Button } from '../components';
import { AddBuildingModal } from '../modules';

const ConfigPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const buildings = useSelector(allBuildings);
  return (
    <>
      <Container>
        <Label>Config page</Label>
        <Button
          onClick={() => {
            setIsModalOpened(!isModalOpened);
          }}
          label="Add new building"
        />

        <ItemList items={buildings} />
      </Container>
      <AddBuildingModal isOpen={isModalOpened} handleClose={() => setIsModalOpened(false)} />
    </>
  );
};

export default ConfigPage;
