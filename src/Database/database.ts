import { item } from "../types/item";
import shoes from "./images/shoes.jpg";
import laptop from "./images/laptop.jfif";
import pencil from "./images/pencil.jpg";
import headphones from "./images/headphones.jfif";
import basket from "./images/basket.jfif";
import smartPhone from "./images/smartPhone.webp";
import bicycle from "./images/bicycle.webp";
import usb from "./images/usb.jpg";

export class Ids {
  private static IdsGenerated: number = 0;

  static generateId() {
    this.IdsGenerated++;
    return this.IdsGenerated;
  }
}
export const ItemsDataBase: item[] = [
  {
    name: "Shoes",
    price: 20,
    id: Ids.generateId(),
    imgUrl: shoes,
    quantity: 1,
  },
  {
    name: "Laptop",
    price: 500,
    id: Ids.generateId(),
    imgUrl: laptop,
    quantity: 1,
  },
  {
    name: "Pencil",
    price: 1,
    id: Ids.generateId(),
    imgUrl: pencil,
    quantity: 1,
  },
  {
    name: "Headphones",
    price: 100,
    id: Ids.generateId(),
    imgUrl: headphones,
    quantity: 1,
  },
  {
    name: "Basket",
    price: 3,
    id: Ids.generateId(),
    imgUrl: basket,
    quantity: 1,
  },
  {
    name: "Smart Phone",
    price: 300,
    id: Ids.generateId(),
    imgUrl: smartPhone,
    quantity: 1,
  },
  {
    name: "Bicycle",
    price: 50,
    id: Ids.generateId(),
    imgUrl: bicycle,
    quantity: 1,
  },
  {
    name: "USB",
    price: 20,
    id: Ids.generateId(),
    imgUrl: usb,
    quantity: 1,
  },
];
