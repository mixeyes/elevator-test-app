import { FC, MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBuilding, addElevator } from '../../../stores';
import { ModalWindow, Button } from '../../../components';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from './styles';
import { BUTTON_TYPES } from '../../../utils/constants';

interface IAddBuildingModal {
  isOpen: boolean;
  handleClose(): void;
}

const schema = yup
  .object({
    name: yup.string().required(),
    floorCount: yup.number().positive().integer().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const AddBuildingModal: FC<IAddBuildingModal> = ({ isOpen, handleClose }) => {
  const buildingId = uuidv4();
  const [elevatorIds, setElevatorsId] = useState<string[]>([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      floorCount: 0,
    },
  });

  useEffect(() => () => {
    reset();
  }, [isOpen]);

  const handleAddElevators = (e: MouseEvent<HTMLButtonElement>) => {
    const id = uuidv4();
    e.preventDefault();
    dispatch(addElevator({ id, currentFloor: 0, status: 'stopped' }));
    setElevatorsId([...elevatorIds, id]);
  };

  const onSubmit = handleSubmit((data: FormData) => {
    dispatch(addBuilding({ ...data, id: buildingId, elevatorIds }));
    handleClose();
  });

  return (
    <ModalWindow windowName="Add new building" isOpen={isOpen} handleClose={handleClose}>
      <Form onSubmit={onSubmit}>
        <input {...register('name')} placeholder="building name" />
        {errors?.name && <p>{errors.name.message}</p>}

        <input {...register('floorCount')} placeholder="0" type="number" />
        {errors?.floorCount && <p>{errors.floorCount.message}</p>}
        <Button onClick={handleAddElevators} label="add elevator" size={{ width: '20vw' }} />
        <br />
        <Button types={BUTTON_TYPES.Submit} label="add building" size={{ width: '20vw' }} />
      </Form>
    </ModalWindow>
  );
};
