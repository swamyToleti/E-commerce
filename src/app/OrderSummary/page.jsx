"use client";
import { useCart } from "../../context/Cartcontext";
import { useRouter } from "next/navigation";
import Nav from "../../components/Nav/Nav";

export default function OrderSummary() {
  const { cart } = useCart();
  const router = useRouter();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    alert("Order Confirmed! 🎉");
    router.push("/");
  };

  return (
    <>
      <Nav />
      <div style={{ padding: "30px" }}>
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>

            <h3>Items:</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} — {item.quantity} × ₹{item.price}
                </li>
              ))}
            </ul>

            <button
              onClick={handleConfirm}
              style={{
                marginTop: "20px",
                backgroundColor: "#00bcd4",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              CONFIRM ORDER
            </button>
          </>
        )}
      </div>
    </>
  );
}
