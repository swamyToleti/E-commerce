"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Item.module.css";
import { Products } from "../../Data/Product";
import { useCart } from "../../context/Cartcontext";
import { useRouter } from "next/navigation";

export default function Item() {
  const [quantities, setQuantities] = useState({});
  const [addedItems, setAddedItems] = useState([]); // track added items
  const { addToCart } = useCart();
  const router = useRouter();

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleAddToCart = (product) => {
    if (addedItems.includes(product.id)) {
      // already added → go to cart
      router.push("/Cart");
    } else {
      const quantity = quantities[product.id] || 1;
      addToCart({ ...product, quantity });
      setAddedItems((prev) => [...prev, product.id]);
      console.log("✅ Added to Cart:", product.name, "Qty:", quantity);
    }
  };

  return (
    <div className={styles.container}>
      {Products.map((product) => {
        const qty = quantities[product.id] || 1;
        const isAdded = addedItems.includes(product.id);

        return (
          <div key={product.id} className={styles.item}>
            <div className={styles.image}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>

            <div className={styles.text}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
            </div>

            <div className={styles.but}>
              <div className={styles.btn}>
                <button onClick={() => decrease(product.id)}>-</button>
                <h1>{qty}</h1>
                <button onClick={() => increase(product.id)}>+</button>
              </div>

              <div className={styles.cart}>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: isAdded ? "#00bcd4" : "#009688",
                    color: "white",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isAdded ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
