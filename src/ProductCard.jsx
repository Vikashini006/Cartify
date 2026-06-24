import { useState } from "react";

function ProductCard({
  product,
  addToCart,
  addToWishlist,
  increaseQuantity,
  decreaseQuantity,
  cart,
}){
  const [isHovered, setIsHovered] = useState(false);
  const cartItem = cart?.find(
  (item) => item.id === product.id
);

  return (
    <div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    border: "1px solid #e0e0e0",
    borderRadius: "15px",
    padding: "15px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    boxShadow: isHovered
      ? "0px 8px 20px rgba(0,0,0,0.2)"
      : "0px 4px 10px rgba(0,0,0,0.1)",
    transform: isHovered
      ? "translateY(-8px)"
      : "translateY(0px)",
  }}
>
      <img
  src={product.image}
  alt={product.name}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  }}
/>
<h3
  style={{
    marginTop: "10px",
    color: "#2c3e50",
  }}
>
  {product.name}
</h3>

      <p>{product.category}</p>

      <p
  style={{
    fontSize: "18px",
    fontWeight: "bold",
    color: "#27ae60",
  }}
>
  ₹{product.price}
</p>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
    flexWrap: "wrap",
  }}
>
  {cartItem ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={() => decreaseQuantity(product.id)}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <span
        style={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {cartItem.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(product.id)}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  ) : (
    <button
      onClick={() => addToCart(product)}
      style={{
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Add to Cart
    </button>
  )}

  <button
    onClick={() => addToWishlist(product)}
    style={{
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    ❤️ Wishlist
  </button>
</div>

    </div>
  );
}

export default ProductCard;