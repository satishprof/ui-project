import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPRofile from "./Components/MyProfile";
import Account from "./Components/AccountInfo";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <>
      {/* <HomePage /> */}

      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/myprofile" element={<MyPRofile />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
