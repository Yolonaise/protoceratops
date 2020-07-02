import { IFloor } from "../../models/floor.model.ts";
import { FloorMessage } from "../floor.message.ts";

export function createFloorCreated(floor: IFloor): FloorMessage {
  var res = new FloorMessage();

  res.value = {
    floorCreated: { floor: floor },
  };

  return res;
}

export function createFloorUpdated(floor: IFloor): FloorMessage {
  var res = new FloorMessage();

  res.value = {
    floorUpdated: { floor: floor },
  };

  return res;
}

export function createFloorDeleted(ref: string): FloorMessage {
  var res = new FloorMessage();

  res.value = {
    floorDeleted: { ref: ref },
  };

  return res;
}
