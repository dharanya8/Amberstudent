import { useParams } from "react-router-dom";

function Universitypage() {
  const { universityName } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>University: {decodeURIComponent(universityName)}</h1>
      <p>Explore information about {decodeURIComponent(universityName)}.</p>
    </div>
  );
}

export default Universitypage;
