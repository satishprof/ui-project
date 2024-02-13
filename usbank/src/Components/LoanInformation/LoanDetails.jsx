import React, { useContext } from "react";
import "../Styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
import axios from "axios";

const LoanDetails = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  console.log("location", location);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (location?.state?.id) {
      await axios
        .put(`http://localhost:4000/loandetails/${location?.state?.id}`, {
          ...location?.state?.data,
          status: "Submitted",
        })
        .then((response) => {
          console.log("response");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      event.target.reset();
    }
    navigate("/landingpage");
  };

  return (
    <>
      <div className="container-box" data-testid="container-box">
        <h2 className="heading-text">Loan Details</h2>
        <div className="form container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="accountingFirm" className="text-grey mb7">
                Accounting Firm:
              </label>
              <input
                type="text"
                id="accountingFirm"
                className="input-feild"
                name="accountingFirm"
                required
              />
            </div>
            <div>
              <label htmlFor="accountantsName" className="text-grey mb7">
                Accountant's Name:
              </label>
              <input
                type="text"
                id="accountantsName"
                className="input-feild"
                name="accountantsName"
                required
              />
            </div>
            <div>
              <label htmlFor="accountantsTelephone" className="text-grey mb7">
                Accountant's Telephone Number:
              </label>
              <input
                type="tel"
                id="accountantsTelephone"
                className="input-feild"
                name="accountantsTelephone"
                required
              />
            </div>
            <div>
              <label htmlFor="accountantsEmail" className="text-grey mb7">
                Accountant's Email Address:
              </label>
              <input
                type="email"
                id="accountantsEmail"
                className="input-feild"
                name="accountantsEmail"
                required
                value={user?.email}
              />
            </div>
            <div className="buttonSets">
              <button className="btn btn-primary mx-3" type="submit">
                Submit
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  window.location.reload();
                  navigate("/landingpage");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoanDetails;
