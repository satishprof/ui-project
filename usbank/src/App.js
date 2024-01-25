import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPRofile from "./Components/MyProfile";
import Account from "./Components/AccountInfo";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/myprofile" element={<MyPRofile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
