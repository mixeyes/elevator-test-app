import React, { FC, MouseEvent } from 'react';
import { IBuilding } from '../../utils/intefaces';
import { Container, ElevatorsCount, Floor, Label } from './itemStyle';
import { Button } from '..';

export const Item: FC<{ data: IBuilding }> = ({ data }) => {
  const handleBuildingChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Label>
        <span>{data.name}</span>
      </Label>
      <Floor>
        <span>{data.floorCount}</span>
      </Floor>
      <ElevatorsCount>
        <span>{data.elevatorIds.length}</span>
      </ElevatorsCount>
      <Button onClick={handleBuildingChange} label="Change building" />
    </Container>
  );
};
