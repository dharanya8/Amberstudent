import React from "react";
import { useParams } from "react-router-dom";

function Coventry() {
  const {Coventry } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h2>🎓 {decodeURIComponent(Coventry)}</h2>
      <p>Welcome to {decodeURIComponent(Coventry)} university details page.</p>
    </div>
  );
}

export default Coventry;
