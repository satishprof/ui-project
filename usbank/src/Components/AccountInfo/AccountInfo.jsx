import React from "react";
import "../Profile.css";
import { useNavigate } from "react-router-dom";
const AccountInfo = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    navigate("/dashboard");
  };
  return (
    <>
      <div className="container-box" data-testid="container-box">
        <h2 className="heading-text">Account Information</h2>
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
              />
            </div>
            <div className="buttonSets">
              <button className="btn-next btn-common" type="submit">
                Submit
              </button>
              <button
                className="btn-cancel btn-common"
                type="button"
                onClick={() => {
                  navigate("/dashboard");
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
export default AccountInfo;
