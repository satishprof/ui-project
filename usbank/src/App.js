import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPRofile from "./Components/MyProfile";
import Account from "./Components/AccountInfo";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import LeftNav from "./LeftNav";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-2">
            <LeftNav />
          </div>
          <div className="col-10">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/myprofile" element={<MyPRofile />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
