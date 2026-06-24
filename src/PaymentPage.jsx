import { useState } from "react";

function PaymentPage({
  setOrderPlaced,
  totalAmount,
  setShowPaymentPage,
}) {
  const [paymentMethod, setPaymentMethod] = useState("");

  // UPI
  const [upiId, setUpiId] = useState("");

  // Card / Netbanking / Wallet fields
  const [accountName, setAccountName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // COD → direct success
    if (paymentMethod === "Cash on Delivery") {
      setOrderPlaced(true);
      setShowPaymentPage(false);
      return;
    }

    // UPI validation
    if (paymentMethod === "UPI") {
      if (!upiId) {
        alert("Enter UPI ID or scan QR");
        return;
      }
    }

    // Card / Netbanking / Wallet validation
    if (
      ["Debit Card", "Credit Card", "Net Banking", "Wallet"].includes(
        paymentMethod
      )
    ) {
      if (!accountName || !cardNumber || !expiry || !cvv) {
        alert("Please fill all account/card details");
        return;
      }
    }

    setOrderPlaced(true);
    setShowPaymentPage(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "600px",
        margin: "50px auto",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2>💳 Payment Options</h2>
      <h3>Total Amount: ₹{totalAmount}</h3>

      {/* PAYMENT OPTIONS */}
      <div style={{ marginTop: "20px" }}>
        {[
          "Debit Card",
          "Credit Card",
          "Net Banking",
          "Wallet",
          "UPI",
          "Cash on Delivery",
        ].map((method) => (
          <label
            key={method}
            style={{ display: "block", marginBottom: "10px" }}
          >
            <input
              type="radio"
              name="payment"
              value={method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {method}
          </label>
        ))}
      </div>

      {/* 💳 CARD / NETBANKING / WALLET FORM */}
      {["Debit Card", "Credit Card", "Net Banking", "Wallet"].includes(
        paymentMethod
      ) && (
        <div style={{ marginTop: "20px" }}>
          <h4>Enter Account Details</h4>

          <input
            type="text"
            placeholder="Account Holder Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Card / Account Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={inputStyle}
          />
        </div>
      )}

      {/* 🔥 UPI QR SECTION */}
      {paymentMethod === "UPI" && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h4>Scan QR to Pay</h4>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi-payment-demo"
            alt="UPI QR"
          />

          <input
            type="text"
            placeholder="Enter UPI ID (optional)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={inputStyle}
          />
        </div>
      )}

      {/* PAY BUTTON */}
      <button
        onClick={handlePayment}
        style={{
          marginTop: "25px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default PaymentPage;