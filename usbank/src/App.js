import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPRofile from "./Components/MyProfile/MyProfile";
import LoanDetails from "./Components/LoanInformation/LoanDetails";
import LandingPage from "./Components/Landing/LandingPage";
import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import HomePage from "./Components/HomePage/HomePage";
import { ContextProvider } from "./Components/Context/Context";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>
        <BrowserRouter>
          <ContextProvider>
            <NavBar toggle={{ toggle, setToggle }} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="/landingpage"
                element={<LandingPage toggle={{ toggle }} />}
              ></Route>
              <Route path="/account/:id" element={<LoanDetails />}></Route>
              <Route path="/myprofile" element={<MyPRofile />}></Route>
            </Routes>
          </ContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
