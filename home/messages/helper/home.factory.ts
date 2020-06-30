import { IHome } from "../../models/home.model.ts";
import { HomeMessage } from "../home.message.ts";

export function createHomeCreated(home: IHome): HomeMessage {
  var res = new HomeMessage();

  res.value = {
    homeCreated: { home: home },
  };

  return res;
}

export function createHomeUpdated(home: IHome): HomeMessage {
  var res = new HomeMessage();

  res.value = {
    homeUpdated: { home: home },
  };

  return res;
}

export function createHomeDeleted(ref: string): HomeMessage {
  var res = new HomeMessage();

  res.value = {
    homeDeleted: { ref: ref },
  };

  return res;
}
