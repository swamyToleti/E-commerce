// src/app/products/page.jsx
"use client";
import { useSearchParams } from "next/navigation";
import { Products } from "../../Data/Product";
import styles from "./page.module.css";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const group = searchParams.get("group");

  let visibleProducts = [];
  if (group === "1") visibleProducts = Products.slice(0, 2);
  if (group === "2") visibleProducts = Products.slice(2, 4);
  if (group === "3") visibleProducts = Products.slice(4, 6);

  return (
    <>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products - Group {group}</h1>

      <ul className="space-y-2">
        {visibleProducts.map((item) => (
          <li
            key={item.id}
            className="p-2 border rounded shadow-sm bg-gray-50"
          >
            <p className="font-semibold">{item.name}</p>
            <p>₹{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
