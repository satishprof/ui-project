import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);
export const ContextProvider = ({ children }) => {
 const [user, setUser] = useState({
   firstname: "",
   lastname: "",
   email: "",
 });
 const user1 = localStorage.getItem("registrationData");
 console.log("user1", user1);
 useEffect(() => {
   if (user1 == null) {
     setUser({
       firstname: "",
       lastname: "",
       email: "",
     });
   } else {
     const userData = JSON.parse(user1);
     console.log("userData", userData);
     setUser({
       firstname: userData[0]?.firstname,
       lastname: userData[0]?.lastname,
       email: userData[0]?.mail,
     });
   }
 }, []);
 // const userData = JSON.parse(user1);
 // console.log("userData", userData[0]);
 // const [user, setUser] = useState({
 //   firstname: userData[0]?.firstname || "",
 //   lastname: userData[0]?.lastname || "",
 //   email: userData[0]?.mail || "",
 //   region: "",
 // });
 return (
   // <UserContext.Provider value={{ user, setUser }}>
<UserContext.Provider value={{ user, setUser }}>
     {children}
</UserContext.Provider>
 );
};