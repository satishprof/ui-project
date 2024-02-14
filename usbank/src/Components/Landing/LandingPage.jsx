import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageGrid from "../LandingGrid/LandingPageGrid";
import MyProfile from "../MyProfile/MyProfile";
import LoanDetails from "../LoanInformation/LoanDetails";
import { UserContext } from "../Context/Context";
import { ContextProvider } from "../Context/Context";

const LandingPage = ({ toggle }) => {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isMyProfile, setIsMyProfile] = useState();
  const [isLoanDetail, setIsLoanDetail] = useState();
  const navigate = useNavigate();
  const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedin-user"));
  const { user } = useContext(UserContext);
  const firstName = user?.firstname.toString();
  const lastName = user?.lastname.toString();
  useEffect(() => {
    if (!loggedInUserInfo) {
      navigate("/");
    }
  }, [loggedInUserInfo]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedin-user");
    navigate("/");
  };

  return (
    <ContextProvider>
      <div className="container-dashboard" data-testid="container-dashboard">
        <div className="row">
          <div
            className={`col-lg-3 col-md-6 col-sm-6 ${
              toggle?.toggle ? "leftnav1" : "leftnav"
            }`}
          >
            <ul className={`listed navLeft shadow1 `}>
              <li
                className={`list text-side-nav ${
                  isLandingPage ? "active" : ""
                } mb20`}
              >
                <div
                  onClick={() => {
                    setIsLandingPage(true);
                    setIsLoanDetail(false);
                    setIsMyProfile(false);
                  }}
                >
                  Loan Dashboard
                </div>
              </li>
              <li
                className={`list text-side-nav ${
                  isMyProfile ? "active" : ""
                } mb20`}
              >
                <div
                  onClick={() => {
                    setIsMyProfile(true);
                    setIsLandingPage(false);
                    setIsLoanDetail(false);
                  }}
                >
                  My Profile
                </div>
              </li>
              <li
                className={`list text-side-nav ${
                  isLoanDetail ? "active" : ""
                } mb20`}
              >
                <div
                  onClick={() => {
                    setIsLoanDetail(true);
                    setIsMyProfile(false);
                    setIsLandingPage(false);
                  }}
                >
                  Account Information
                </div>
              </li>
            </ul>
          </div>
          <div className="col-9 grid">
            <div className="dashboard-heading">
              <h3 className="title" style={{ margin: "auto" }}>
                Welcome {firstName.charAt(0).toUpperCase() + firstName.slice(1)}{" "}
                {lastName.charAt(0).toUpperCase() + lastName.slice(1)}
              </h3>
              <button
                type="button"
                class="btn btn-secondary button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            {isLoanDetail && <LoanDetails />}
            {isLandingPage && <LandingPageGrid />}
            {isMyProfile && <MyProfile />}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};
export default LandingPage;
