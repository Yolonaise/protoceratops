export interface IHome {
  _id: {
    $oid: string;
  };
  name: string;
  floors: number;
  rooms: string[];
}
