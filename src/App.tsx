import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Item from "./components/Item/Item";
import { item } from "./types/item";
import Cart from "./components/cart/Cart";

const baseUrl = "/mirage";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState<item[]>([]);
  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const items: item[] = await (await fetch(`${baseUrl}/getItems`)).json();
      setLoading(false);
      setItems(items);
    }
    fetchItems();
  }, []);
  console.log(items);
  if (isLoading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }
  return (
    <div className={styles.App}>
      <div className={styles.itemsDiv}>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              id={item.id}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          );
        })}
      </div>
      <Cart />
    </div>
  );
}

export default App;
