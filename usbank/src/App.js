import logo from "./logo.svg";
import "./App.css";
import MyPRofile from "./Components/MyProfile";
import Account from "./Components/AccountInfo";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
      <Account />
      <MyPRofile />
    </>
  );
}

export default App;
