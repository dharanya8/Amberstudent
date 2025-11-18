import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import  Nav1  from './Project/Nav1'
import Navbar3 from './Project/Navbar2'
import Searchbar from './Project/Searchbar'
import Search from './Project/Search'
import Secondsection from './Project/Secondsection'
import Homepage from './Project/Homepage'
import LoginModal from './Project/Login'
import Navbar2 from './Project/Navbar2'
import Router1 from './Project/Router1'
import Popularcities from './Project/Popularcities'
import Thousands from './Project/Thousands'
import Test from './Project/Test'
import ThemeProvider from './Project/Themeprovider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
       {/* <BrowserRouter>  
               {/* <Router1/>  */}
            {/* <Thousands/>    */}
     {/* </BrowserRouter>  */}
     {/* <Test/> */}
     <ThemeProvider/>
            {/* <Firstsection1/>    */}
            {/* <Secondsection/> */}
         
            {/* <Popularcities/> */}
             {/* <Searchbar/>  */}
            {/* <Search/> */}
        
           {/* <Navbar2/> */}
            {/* <LoginModal/> */}
      </StrictMode>
)
