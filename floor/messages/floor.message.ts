import { IMessage } from "../../deps.ts";
import { IFloor } from "../models/floor.model.ts";

type IFloorValue = {
  floorDeleted?: { ref: string };
  floorCreated?: { floor: IFloor };
  floorUpdated?: { floor: IFloor };
};

export class FloorMessage implements IMessage {
  value: IFloorValue = {};

  parse(data: Uint8Array): void {
    this.value = JSON.parse(new TextDecoder().decode(data));
  }

  getPayload(): string {
    return JSON.stringify(this.value);
  }

  getName(): string {
    return "Floor";
  }
}
