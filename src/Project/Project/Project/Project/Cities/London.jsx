import React from "react";
import { useParams } from "react-router-dom";

function London() {
  const { London } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h2>🏙️ {decodeURIComponent(London)}</h2>
      <p>Welcome to {decodeURIComponent(London)} city details page.</p>
    </div>
  );
}
export default London;