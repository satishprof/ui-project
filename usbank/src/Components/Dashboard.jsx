import React, { useState } from "react";
import "./Profile.css";

const Dashboard = () => {
  const [loanData, setLoanData] = useState([
    { id: 1234567, purpose: "Home Loan", status: "Approved" },
    { id: 1234567, purpose: "Car Loan", status: "Pending" },
    { id: 1234567, purpose: "Education Loan", status: "Rejected" },
    { id: 1234567, purpose: "Personal Loan", status: "Approved" },
    { id: 1234567, purpose: "Business Loan", status: "Pending" },
  ]);

  const handleSave = (id) => {
    console.log(`Saving data for loan ID: ${id}`);
  };

  return (
    <div className="container">
      <h2 className="heading-text text-grey">Loan Dashboard</h2>
      <h4 className="heading-text-smaller text-grey">Welcome User</h4>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th className="text-grey">Loan ID</th>
            <th className="text-grey">Purpose of Loan</th>
            <th className="text-grey">Status</th>
            <th className="text-grey">Options</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan) => (
            <tr key={loan.id}>
              <td className="text-grey">{loan.id}</td>
              <td className="text-grey">{loan.purpose}</td>
              <td className="text-grey">{loan.status}</td>
              <td>
                <button
                  className="btn-next"
                  onClick={() => handleSave(loan.id)}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
