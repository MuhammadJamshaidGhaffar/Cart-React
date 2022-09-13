import styles from "./style.module.css";
import React, { useState } from "react";

function Cart() {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <div className={styles.cartDivWrapper}>
      <div
        className={`${styles.cartDiv} ${
          isCartOpen ? styles.cartOpen : styles.cartClose
        }`}
      >
        <div
          className={styles.header}
          onClick={() => {
            setCartOpen(!isCartOpen);
          }}
        >
          &and;
        </div>
        <div className={`${styles.itemsDiv} `}></div>;
      </div>
    </div>
  );
}

export default Cart;

// function displayItemsDiv(isCartOpen: boolean) {
//   if (isCartOpen) {
//   }
// }
