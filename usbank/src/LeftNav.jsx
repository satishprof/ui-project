import React from "react";
import "./Components/Profile.css";

const LeftNav = () => {
  return (
    <>
      <ul className="listed navLeft shadow">
        <li className="list text-side-nav active mb20">Loan Dashboard</li>
        <li className="list text-side-nav mb20">My Profile</li>
        <li className="list text-side-nav mb20">Accountant Information</li>
      </ul>
    </>
  );
};

export default LeftNav;
