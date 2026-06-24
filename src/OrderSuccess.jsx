import React, { useEffect, useState } from "react";

function OrderSuccess({ totalAmount, setOrderPlaced, setShowPaymentPage,setShowTracking }) {
  const [showTick, setShowTick] = useState(false);

  const orderId =
    "#" + Math.floor(100000 + Math.random() * 900000);

  // 🎉 animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTick(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          boxShadow: "0px 0px 30px rgba(99,102,241,0.5)",
        }}
      >
        {/* 🎉 Animated Tick */}
        <div
          style={{
            fontSize: "80px",
            transform: showTick ? "scale(1)" : "scale(0)",
            transition: "all 0.4s ease",
          }}
        >
          {showTick ? "✅" : ""}
        </div>

        <h3 style={{ color: "#22c55e" }}>ORDER CONFIRMED</h3>

        <h1>Yay! 🎉</h1>

        <p>Your order has been placed successfully.</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <div>
            <small>Amount Paid</small>
            <h3>₹{totalAmount}</h3>
          </div>

          <div>
            <small>Delivery</small>
            <h3>3-5 Days</h3>
          </div>
        </div>

        <p style={{ marginTop: "20px" }}>
          Order ID: {orderId}
        </p>
        <button
  onClick={() => setShowTracking(true)}
  style={{
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    backgroundColor: "#f59e0b",
    color: "black",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
  }}
  onMouseOver={(e) =>
    (e.target.style.backgroundColor = "#fbbf24")
  }
  onMouseOut={(e) =>
    (e.target.style.backgroundColor = "#f59e0b")
  }
>
  🚚 Track Order
</button>

        <button
          onClick={() => {
            setOrderPlaced(false);
            setShowPaymentPage(false);
          }}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Continue Shopping →
        </button>
        
      </div>
    </div>
  );
}

export default OrderSuccess;