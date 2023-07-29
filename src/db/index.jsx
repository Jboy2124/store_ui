import { Dexie } from "dexie";

export const db = new Dexie("personalInfo");

db.version(3).stores({
  personal: "++idUser, profId, userId, user",
  cart: "++idCart, prodId, count",
});
