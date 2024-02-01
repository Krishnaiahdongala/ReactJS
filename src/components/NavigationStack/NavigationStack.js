import { BrowserRouter, Route, Routes } from "react-router-dom"
import ForgotPassword from "../NavPages/ForgotPassword"
import Login from "../NavPages/Login-screen"
import RegistrationScreen from "../NavPages/Register-screen"




const NavigationStack=()=>{



    return(

        <>

 <BrowserRouter>
 <Routes>
     <Route path="/"  Component={Login}/>
     <Route path="/register"  Component={RegistrationScreen}   />
     <Route path="/ForgotPassword"  Component={ForgotPassword}   />
      
 </Routes>
 </BrowserRouter>
      
        </>
    )
}
export default NavigationStack