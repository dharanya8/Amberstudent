import Firstsection1 from "./Firstsection";
import Popularcities from "./Popularcities";
   import Secondsection from "./Secondsection"
   import { Outlet } from "react-router-dom";
import Thousands from "./Thousands";

   function Homepage(){
    return(
        <div>
        
            <Firstsection1/>
            <Secondsection/>
            <Outlet/>
            <Popularcities/>
            <Thousands/>
       </div>
    )
   }
   export default Homepage;