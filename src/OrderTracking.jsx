import React from "react";

function OrderTracking({ setShowTracking, setShowCart, goHome }) {
  const steps = [
    {
      title: "Order Placed",
      desc: "Your order has been confirmed",
      status: "done",
    },
    {
      title: "Packed",
      desc: "Your order is being packed",
      status: "done",
    },
    {
      title: "Shipped",
      desc: "Your order is on the way",
      status: "active",
    },
    {
      title: "Out for Delivery",
      desc: "Delivery agent has your package",
      status: "pending",
    },
    {
      title: "Delivered",
      desc: "Expected in 3-5 days",
      status: "pending",
    },
  ];

  const getColor = (status) => {
    if (status === "done") return "#22c55e";
    if (status === "active") return "#3b82f6";
    return "#9ca3af";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#f4f6f9",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🚚 Order Tracking</h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
              alignItems: "flex-start",
            }}
          >
            {/* DOT */}
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                marginTop: "6px",
                backgroundColor: getColor(step.status),
              }}
            />

            {/* CONTENT */}
            <div>
              <h3 style={{ margin: 0 }}>{step.title}</h3>
              <p style={{ margin: 0, color: "#6b7280" }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* 🟢 CONTINUE SHOPPING BUTTON */}
        <button
          onClick={() => {
            goHome();
          }}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "scale(1.03)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "scale(1)")
          }
        >
          🛍️ Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderTracking;