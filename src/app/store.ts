import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { elevatorReducer, buildingReducer } from '../stores';

export const store = configureStore({
  reducer: {
    elevators: elevatorReducer,
    buildings: buildingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
