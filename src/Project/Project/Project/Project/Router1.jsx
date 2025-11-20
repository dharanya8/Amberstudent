import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./../Project/Homepage";
import Popularcities from "./../Project/Popularcities";
import LondonPage from "./../Project/Pages/London";
import Citypage from "./../Project/Pages/Citypage";
import Universitypage from "./../Project/Pages/Universitypage";
import Thousands from "./../Project/Thousands";

function App() {

  return (

    <>
          <Routes>
        <Route path="/" element={<Homepage />}>
          {/* <Route index element={<Popularcities />} /> */}
          {/* <Route path="thousands" element={<Thousands />} />    */}
       {/* <Route path="uk/london" element={<LondonPage/>} /> */}
        </Route>
        {/* <Route path="/city/:London" element={<Citypage/>} /> */}
        <Route path="/university/:universityName" element={<Universitypage />} />
      </Routes>
    </>
  );
}

export default App;
