export interface IBuilding {
  id: string;
  name: string;
  floorCount: number;
  elevatorsIds: string[];
}

export interface IElevator {
  id: string;
  currentFloor: number;
  status?: 'stopped' | 'moving';
}

export interface IBuildings {
    [key: string]: IBuilding;
};
