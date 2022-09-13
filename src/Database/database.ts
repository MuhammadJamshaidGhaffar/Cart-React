import { item } from "../types/item";
import shoes from "./images/shoes.jpg";
import laptop from "./images/laptop.jfif";
import pencil from "./images/pencil.jpg";
import headphones from "./images/headphones.jfif";

export class Ids {
  private static IdsGenerated: number = 0;

  static generateId() {
    this.IdsGenerated++;
    return this.IdsGenerated;
  }
}
export const ItemsDataBase: item[] = [
  { name: "Shoes", price: 20, id: Ids.generateId(), imgUrl: shoes },
  { name: "Laptop", price: 500, id: Ids.generateId(), imgUrl: laptop },
  { name: "Pencil", price: 1, id: Ids.generateId(), imgUrl: pencil },
  { name: "Headphones", price: 100, id: Ids.generateId(), imgUrl: headphones },
];
