import React, { FC, MouseEvent } from "react";
import { IBuilding } from "../../intefaces";
import { Container, ElevatorsCount, Floor, Label } from "./itemStyle";
import { Button } from "..";

export const Item: FC<{data: IBuilding}> = ({ data }) => {
    const handleBuildingChange = (e: MouseEvent<MouseEvent>) => {e.preventDefault()};
    return (
  <Container>
    <Label>
      <span>{data.name}</span>
    </Label>
    <Floor>
      <span>{data.floorCount}</span>
    </Floor>
    <ElevatorsCount>
      <span>{data.elevatorsIds.length}</span>
    </ElevatorsCount>
    <Button onClick={handleBuildingChange} label="Change building" />
  </Container>
)};
