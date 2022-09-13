import styles from "./style.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { item } from "../../types/item";
import { deleteItem } from "../../store/reducer";

function Cart() {
  const [isCartOpen, setCartOpen] = useState(false);
  const items = useSelector((state) => {
    return state;
  }) as item[];
  const dispatch = useDispatch();
  console.log("inisde cart");
  console.log(items);
  return (
    <div
      className={`${styles.cartDivWrapper} ${
        isCartOpen ? styles.cartOpen : styles.cartClose
      }  `}
    >
      <div className={`${styles.cartDiv} `}>
        <div
          className={styles.header}
          onClick={() => {
            setCartOpen(!isCartOpen);
            console.log("clciked");
          }}
        >
          {isCartOpen ? <>&or;</> : <>&and;</>}
        </div>
        <div className={`${styles.itemsDiv} `}>
          <table>
            <tr className={`${styles.item} ${styles.tableHeading}`}>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
            {items.map((item) => (
              <tr className={`${styles.item}`}>
                <td>
                  <img src={item.imgUrl} alt="" />
                </td>
                <td>{item.name}</td>
                <td className={styles.price}>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <span
                    className={styles.cross}
                    onClick={() => {
                      dispatch(deleteItem(item.id));
                    }}
                  >
                    X
                  </span>
                </td>
              </tr>
            ))}
            <tr className={`${styles.item}`}>
              <td></td>
              <td>Total</td>
              <td className={styles.price}>
                $
                {items.reduce((sum, item) => {
                  return sum + item.price * item.quantity;
                }, 0)}
              </td>
              <td>
                {items.reduce((sum, item) => {
                  return sum + item.quantity;
                }, 0)}
              </td>
              <td></td>
            </tr>
          </table>
        </div>
        ;
      </div>
    </div>
  );
}

export default Cart;

// function displayItemsDiv(isCartOpen: boolean) {
//   if (isCartOpen) {
//   }
// }
