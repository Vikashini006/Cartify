function CategoryFilter({ category, setCategory }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Cosmetics">Cosmetics</option>
        <option value="Jewellery">Jewellery</option>
      </select>
    </div>
  );
}

export default CategoryFilter;