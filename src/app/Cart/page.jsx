"use client";
import { useCart } from "../../context/Cartcontext";
import Nav from "../../components/Nav/Nav";
import styles from "../Cart/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart } = useCart();
  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push("/OrderSummary");
  };

  return (
    <>
      <Nav />

      <div className={styles.p}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={styles.product}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={styles.image}
                />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{item.name}</h2>
                <p className={styles.price}>₹{item.price}</p>
                <p className={styles.quantity}>Quantity: {item.quantity}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.order}>
        <div>
          <button onClick={handlePlaceOrder}>PLACE ORDER</button>
        </div>
      </div>
    </>
  );
}
