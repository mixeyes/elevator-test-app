import { FC, ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBuilding } from '../../../stores';
import { ModalWindow } from '../ModalWindow';
import { Button } from '../../../components';
import { v4 as uuidv4 } from 'uuid';
import { useForm, Resolver } from 'react-hook-form';
import { IBuilding } from '../../../utils/intefaces';

interface IAddBuildingModal {
  isOpen: boolean;
  handleClose(): void;
}

const resolver: Resolver<IBuilding> = async (values) => {
  return {
    values: { id: uuidv4(), floorCount: values.floorCount },
    errors: {},
  };
};

export const AddBuildingModal: FC<IAddBuildingModal> = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const handleAddBuilding = () => {
    dispatch(addBuilding({ id: uuidv4(), floorCount: 9, elevatorsIds: [''], name: 'test building' }));
    handleClose();
  };

  return (
    <ModalWindow windowName="Add new building" isOpen={isOpen} handleClose={handleClose}>
      <Button onClick={handleAddBuilding} label="add new building" />
    </ModalWindow>
  );
};
