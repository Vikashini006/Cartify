function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "90%",
          maxWidth: "900px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;