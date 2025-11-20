import React from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔍 Search Page</h2>
      <p>Here search results will appear...</p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          background: "#333",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default SearchPage;
