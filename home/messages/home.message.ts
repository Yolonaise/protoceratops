import { IMessage } from "../../deps.ts";
import { IHome } from "../models/home.model.ts";

type IHomeValue = {
  homeDeleted?: { ref: string };
  homeCreated?: { home: IHome };
  homeUpdated?: { home: IHome };
};

export class HomeMessage implements IMessage {
  value: IHomeValue = {};

  parse(data: Uint8Array): void {
    this.value = JSON.parse(new TextDecoder().decode(data));
  }

  getPayload(): string {
    return JSON.stringify(this.value);
  }

  getName(): string {
    return "Home";
  }
}
