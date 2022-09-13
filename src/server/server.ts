import { createServer, Model } from "miragejs";
import { ItemsDataBase } from "../Database/database";
import { Ids } from "../Database/database";
import { item } from "../types/item";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "mirage";
      this.get("/getItems", () => {
        return ItemsDataBase;
      });
    },
  });

  return server;
}
