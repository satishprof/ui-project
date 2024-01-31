import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardGrid from "../DashboardGrid/DashboardGrid";
import MyProfile from "../MyProfile/MyProfile";
import AccountInfo from "../AccountInfo/AccountInfo";

const Dashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  const [isMyProfile, setIsMyProfile] = useState();
  const [isAccountInfo, setIsAccountInfo] = useState();

  const navigate = useNavigate();
  const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedin-user"));

  useEffect(() => {
    if (!loggedInUserInfo) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedin-user");
    navigate("/");
  };

  return (
    <div className="container-dashboard" data-testid="container-dashboard">
      <div className="row">
        <div className="col-3 leftnav">
          <ul className="listed navLeft shadow">
            <li className="list text-side-nav active mb20">
              <div
                onClick={() => {
                  setIsDashboard(true);
                  setIsAccountInfo(false);
                  setIsMyProfile(false);
                }}
              >
                Loan Dashboard
              </div>
            </li>
            <li className="list text-side-nav mb20">
              <div
                onClick={() => {
                  setIsMyProfile(true);
                  setIsDashboard(false);
                  setIsAccountInfo(false);
                }}
              >
                My Profile
              </div>
            </li>
            <li className="list text-side-nav mb20">
              <div
                onClick={() => {
                  setIsAccountInfo(true);
                  setIsMyProfile(false);
                  setIsDashboard(false);
                }}
              >
                Account Information
              </div>
            </li>
          </ul>
        </div>
        <div className="col-9 grid">
          <div className="dashboard-heading">
            <h3 className="title">Welcome User</h3>
            <button
              type="button"
              class="btn btn-primary button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          {isAccountInfo && <AccountInfo />}
          {isDashboard && <DashboardGrid />}
          {isMyProfile && <MyProfile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
