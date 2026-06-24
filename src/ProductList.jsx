import ProductCard from "./ProductCard";

function ProductList({
  products,
  addToCart,
  addToWishlist,
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          justifyItems: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;