import { item } from "../../types/item";
import styles from "./Item.module.css";

const Item: React.FC<item> = (item) => {
  return (
    <div className={styles.itemDiv}>
      <div className={styles.imgWrapper}>
        <img src={item.imgUrl} />
        <div className={styles.imgShade}>
          <button className={styles.add}>Add to Cart</button>
        </div>
      </div>

      <p className={styles.name}>{item.name}</p>
      <p className={`${styles.price}`}>${item.price}</p>
    </div>
  );
};
export default Item;
