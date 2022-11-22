import React from 'react';
import {Outlet} from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";


const ProtectedRoutesComponent = ({admin}) => {
      
       if(admin){
              let adminAuth = true;
              return adminAuth ? <Outlet/> : <navigate to ="/login"/>
       }
       else{

              let userAuth=true;
              return userAuth ? <> <UserChatComponent/> <Outlet/> </> : <navigate to = "/login"/> 
       }

       // return auth ? <Outlet/> : <Navigate to="/login" />

}

export default ProtectedRoutesComponent;