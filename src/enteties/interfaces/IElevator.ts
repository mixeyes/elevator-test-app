export interface IElevator {
  id: string;
  currentFloor: number;
  buildingId: string;
  moveElevator(moveTo: number): () => void;
  stopElevator(): () => void;
}
