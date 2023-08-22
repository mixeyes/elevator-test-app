import { v4 as uuidv4 } from 'uuid';
import type { IElevator } from './interfaces/IElevator';

export class Elevator implements IElevator {
  id: string;
  currentFloor: number;
  buildingId: string;

  constructor(building: string, current = 0) {
    this.id = uuidv4();
    this.buildingId = building;
    this.currentFloor = current;
  }

  moveElevator(moveTo: number): () => void {
    throw new Error('Method not implemented.');
  }

  stopElevator(): () => void {
    throw new Error('Method not implemented.');
  }
}
