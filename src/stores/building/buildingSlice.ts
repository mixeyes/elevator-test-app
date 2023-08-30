import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { IBuilding, IBuildings } from '../../utils/intefaces';

const initialState: IBuildings = {
  bId1: { id: 'bId1', elevatorsIds: ['aId1'], floorCount: 9, name: 'building 1' },
};

export const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    addBuilding: (state: IBuildings, action: PayloadAction<IBuilding>) => {
      state[action.payload.id] = action.payload;
    },
    addElevator: (state: IBuildings, action: PayloadAction<{ buildingId: string; elevatorId: string }>) => {
      const { elevatorId, buildingId } = action.payload;
      state[buildingId].elevatorsIds.push(elevatorId);
    },
  },
});

export const { addBuilding, addElevator } = buildingSlice.actions;

export const allBuildings = (state: IBuildings) => state.building;

export const buildingReducer = buildingSlice.reducer;
