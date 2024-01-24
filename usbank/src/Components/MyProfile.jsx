import React from "react";
import "./Profile.css";

const MyProfile = () => {
  return (
    <>
      <div className="container-box">
        <h2 className="heading-text">My Profile</h2>
        <div className="form container">
          <form>
            <div>
              <label htmlFor="firstName" className="text-grey mb7">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="input-feild"
                name="firstName"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-grey mb7">
                Last Name:
              </label>
              <input
                type="text"
                className="input-feild"
                id="lastName"
                name="lastName"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-grey mb7">
                Email Address:
              </label>
              <input
                type="email"
                className="input-feild"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label htmlFor="region" className="text-grey mb7">
                Region:
              </label>
              <select
                id="region"
                className="input-feild"
                name="region"
                required
              >
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            <div className="buttonSets">
              <button className="btn-next btn-common" type="submit">
                Next
              </button>
              <button className="btn-cancel btn-common" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
