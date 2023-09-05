import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBuilding, IBuildings } from '../../utils';

const initialState: IBuildings = {
  bId1: { id: 'bId1', elevatorIds: ['aId1'], floorCount: 9, name: 'building 1' },
};

export const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    addBuilding: (state: IBuildings, action: PayloadAction<IBuilding>) => {
      state[action.payload.id] = action.payload;
    },
    addElevatorToBuilding: (state: IBuildings, action: PayloadAction<{ buildingId: string; elevatorId: string }>) => {
      const { elevatorId, buildingId } = action.payload;
      state[buildingId].elevatorIds.push(elevatorId);
    },
  },
});

export const { addBuilding, addElevatorToBuilding } = buildingSlice.actions;

export const allBuildings = (state: IBuildings) => state.building;

export const buildingReducer = buildingSlice.reducer;
