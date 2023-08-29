import React, { FC } from 'react';
import { Container } from './listStyles';
import { IBuilding, IBuildings } from '../../intefaces';
import { Item } from './Item';

interface IItemList {
  items: IBuildings
}

export const ItemList: FC<IItemList> = ({ items }) => {
  return (
    <Container>
      {Object.entries(items).map(([key, value]) => (<Item key={key} data={value} />))}
    </Container>
  );
};
