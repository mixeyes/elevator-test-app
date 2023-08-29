import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allBuildings, addBuilding } from '../stores';
import { Container, Label } from "./configPageStyles";
import { ItemList, Button } from '../components';
import { AddBuildingModal } from '../modules';

const ConfigPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const buildings = useSelector(allBuildings);
  const dispatch = useDispatch();
  // dispatch(addBuilding({id: 'weyriuqetrut',floorCount: 9, elevatorsIds: [''], name: 'test building'}))
  const handleAddBuilding = () => {};

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
      <AddBuildingModal isOpen={isModalOpened} handleClose={() => setIsModalOpened(false)} >first modal window</AddBuildingModal>
    </>
  );
};

export default ConfigPage;
