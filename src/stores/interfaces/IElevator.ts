export interface IElevator {
  id: string;
  currentFloor: number;
  status?: 'stopped' | 'moving';
}
