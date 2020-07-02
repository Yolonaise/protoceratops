export interface IFloor {
  _id: {
    $oid: string;
  };
  name: string;
  number: number; 
  rooms: string[];
}
