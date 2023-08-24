import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { IElevator } from '../interfaces/IElevator';

export interface IElevatorsState {
  [key: string]: IElevator;
}

const initialState: IElevatorsState = {
  eId1: { id: 'eId1', currentFloor: 0 },
};

// export const moveElevatorAsync = createAsyncThunk(
//     'elevator/move',
//     async (elevator: IElevator) => {
//         const updElv = {...elevator};
//         const move = (nextFloor: number) => {
//             if(nextFloor > updElv.currentFloor){
//                 updElv.currentFloor++;
//             } else if (nextFloor < updElv.currentFloor) {
//                 updElv.currentFloor--;
//             }
//         }
//         while(elevator.currentFloor !== nextFloor) {
//            await setTimeout(() => {
//                 move(nextFloor);
//             }, 500);

//         };
//         return updElv;
//     }
// );

export const elevatorSlice = createSlice({
  name: 'elevator',
  initialState,
  reducers: {
    addElevator: (state: IElevatorsState, action: PayloadAction<IElevator>) => {
      state.elevators = { ...state.elevators, [action.payload.id]: action.payload };
    },
    moveElevator: (state: IElevatorsState, action: PayloadAction<{ elevatorId: string; nextFloor: number }>) => {
      const { elevatorId, nextFloor } = action.payload;
      const updElv = state[elevatorId];
      const move = (nextFloor: number) => {
        if (nextFloor > updElv.currentFloor) {
          updElv.currentFloor++;
        } else if (nextFloor < updElv.currentFloor) {
          updElv.currentFloor--;
        }
      };

      const updateCurrentFloor = async (floor: number) => {
        await setTimeout(() => {
          move(floor);
        }, 500);
      };

      while (updElv.currentFloor !== nextFloor) {
        updateCurrentFloor(nextFloor);
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(moveElevatorAsync.fulfilled, (state, action: PayloadAction<IElevator>) => {
  //       state.elevators[action?.payload.id].status = 'stopped';
  //       state.elevators[action?.payload.id] = action.payload;
  //     });
  //   },
});

export const elevatorReducer = elevatorSlice.reducer;
