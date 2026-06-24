function Navbar({ cartCount, setShowCart }) {
  return (
    <nav
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div>
        <h1
  style={{
    margin: 0,
    fontSize: "42px",
    fontWeight: "bold",
  }}
>
  🛒 Cartify Store
</h1>
        <p
  style={{
    marginTop: "5px",
    fontSize: "18px",
    color: "#dfe6e9",
  }}
>
          Shop Smart, Shop Easy
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#3498db",
          padding: "10px 20px",
          borderRadius: "25px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        🛍️ Cart ({cartCount})
      </div>
      <button
  style={{
    marginLeft: "15px",
    padding: "10px 18px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  }}
  onClick={() => alert("Login clicked (you can open login page here)")}
>
  🔐 Login
</button>
      <button
  onClick={() => setShowCart(true)}
  style={{
    marginLeft: "15px",
    padding: "8px 15px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  🛒 View Cart
</button>
    </nav>
  );
}

export default Navbar;