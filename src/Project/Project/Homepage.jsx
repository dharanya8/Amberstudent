import Firstsection1 from "./Firstsection";
   import Secondsection from "./Secondsection"
   import { Outlet } from "react-router-dom";

   function Homepage(){
    return(
        <div>
        
            <Firstsection1/>
            <Secondsection/>
            <Outlet/>
       </div>
    )
   }
   export default Homepage;