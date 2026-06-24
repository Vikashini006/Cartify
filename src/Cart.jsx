import React from "react";
import CartItem from "./CartItem";
function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setShowCart,
  setOrderPlaced,
  setShowPaymentPage,
}) {
  const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);
const gst = totalPrice * 0.18;
const finalTotal = totalPrice + gst;
const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
  <div
    style={{
      margin: "30px",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
    }}
  >
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <h2>Shopping Cart</h2>

  <button
    onClick={() => setShowCart(false)}
    style={{
      padding: "10px 15px",
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    ← Continue Shopping
  </button>
</div>

      {cart.length === 0 ? (
  <div
    style={{
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#f8f9fa",
      borderRadius: "15px",
      marginTop: "20px",
    }}
  >
    <h2>🛒 Your Cart is Empty</h2>

    <p
      style={{
        color: "#7f8c8d",
        fontSize: "18px",
      }}
    >
      Looks like you haven't added any products yet.
    </p>

    <p
      style={{
        color: "#3498db",
        fontWeight: "bold",
      }}
    >
      Start shopping now! 🚀
    </p>
  </div>
) : (
        <>

{cart.map((item, index) => (
  <CartItem
    key={index}
    item={item}
    index={index}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
  />
))}

          <hr />
          <button
  onClick={clearCart}
  style={{
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  }}
>
  Clear Cart
</button>
<button
  onClick={() => setShowPaymentPage(true)}
  style={{
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  }}
>
  Proceed to Payment
</button>
        </>
      )}
    </div>
  );
}

export default Cart;