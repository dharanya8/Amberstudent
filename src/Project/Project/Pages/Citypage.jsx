import { useParams } from "react-router-dom";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Citypage() {
  const { cityName } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>City: </h1>
      <p>Welcome to London page!</p>
      
    </div>
  );
}

export default Citypage;
