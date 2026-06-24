import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import products from "./products";
import SearchBar from "./components/Searchbar";
import CategoryFilter from "./CategoryFilter";
import Footer from "./Footer";
import OrderSuccess from "./OrderSuccess";
import PaymentPage from "./PaymentPage";
import OrderTracking from "./OrderTracking.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [page, setPage] = useState("home");
  const [showTracking, setShowTracking] = useState(false);
  const goHome = () => {
  setShowTracking(false);
  setShowCart(false);
  setOrderPlaced(false);
  setShowPaymentPage(false);
};
  
 const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 }
    ]);
  }
};
const addToWishlist = (product) => {
  const exists = wishlist.find(
    (item) => item.id === product.id
  );

  if (!exists) {
    setWishlist([...wishlist, product]);
  }
};

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
  const clearCart = () => {
  setCart([]);
};
  const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;
  

  return matchesSearch && matchesCategory;
});
if (showTracking) {
  return <OrderTracking goHome={goHome} />;
}
  if (showPaymentPage) {
  return (
    <PaymentPage
      totalAmount={cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      )}
      setOrderPlaced={setOrderPlaced}
      setShowPaymentPage={setShowPaymentPage}
    />
  );
}

if (orderPlaced) {
  return (
    <OrderSuccess
      totalAmount={cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      )}
      setOrderPlaced={setOrderPlaced}
      setShowPaymentPage={setShowPaymentPage}
      setShowTracking={setShowTracking}
    />
  );
}

return (
  <div
  style={{
    backgroundColor: darkMode
      ? "#1e272e"
      : "#f4f6f9",

    color: darkMode
      ? "white"
      : "black",

    minHeight: "100vh",
  }}
>
    <Navbar cartCount={cart.length} setShowCart={setShowCart} />
    <div
  style={{
    textAlign: "right",
    padding: "15px 20px",
  }}
>
  <button
    onClick={() => setDarkMode(!darkMode)}
    style={{
      backgroundColor: darkMode
        ? "#f1c40f"
        : "#2c3e50",
      color: darkMode
        ? "black"
        : "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    {darkMode
      ? "☀️ Light Mode"
      : "🌙 Dark Mode"}
  </button>
</div>

    <div
  style={{
    textAlign: "center",
    padding: "20px",
  }}
>
  <h1>Welcome to Cartify</h1>
  <p>Your One-Stop Shopping Destination</p>
</div>

    <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />

    <CategoryFilter
      category={category}
      setCategory={setCategory}
    />

    {!showCart && (
  <ProductList
    products={filteredProducts}
    addToCart={addToCart}
    addToWishlist={addToWishlist}
    cart={cart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
  />
)}

    {showCart && (
  <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    setShowCart={setShowCart}
    setOrderPlaced={setOrderPlaced}
    setShowPaymentPage={setShowPaymentPage}
  />
)}
<OrderTracking
  setShowTracking={setShowTracking}
  setShowCart={setShowCart}
/>

    <Footer />
  </div>
);
}

export default App;