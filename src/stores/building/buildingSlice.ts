import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { IBuilding } from '../interfaces/IBuilding';

export interface IBuildingState {
  [key: string]: IBuilding;
}

const initialState: IBuildingState = {
  bId1: { id: 'bId1', elevatorsIds: ['aId1'], floorCount: 9, name: 'building 1' },
};

export const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    addBuilding: (state: IBuildingState, action: PayloadAction<IBuilding>) => {
      state = { ...state, [action.payload.id]: action.payload };
    },
    addElevator: (state: IBuildingState, action: PayloadAction<{ buildingId: string; elevatorId: string }>) => {
      const { elevatorId, buildingId } = action.payload;
      state[buildingId].elevatorsIds.push(elevatorId);
    },
  },
});

export const allBuildings = (state: IBuildingState) => state.buildings;

export const buildingReducer = buildingSlice.reducer;
