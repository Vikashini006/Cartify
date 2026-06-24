function CartItem({
  item,
  index,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div>
        <strong
          style={{
            fontSize: "18px",
          }}
        >
          {item.name}
        </strong>

        <p
          style={{
            margin: "8px 0",
            color: "#27ae60",
            fontWeight: "bold",
          }}
        >
          ₹{item.price}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>Quantity:</span>

          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(index)}
        style={{
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;