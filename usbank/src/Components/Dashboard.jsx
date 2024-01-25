import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Profile.css";

const Dashboard = () => {
  const [loanData, setLoanData] = useState([
    {
      id: 1110011,
      purpose: "Home Loan",
      status: "Approved",
      options: "{<button>Save</button>}",
    },
    { id: 1210021, purpose: "Car Loan", status: "Pending" },
    { id: 1120012, purpose: "Education Loan", status: "Rejected" },
    { id: 133011, purpose: "Personal Loan", status: "Approved" },
    { id: 1512011, purpose: "Business Loan", status: "Pending" },
    { id: 1613012, purpose: "Home Loan", status: "Approved" },
    { id: 1724013, purpose: "Car Loan", status: "Rejected" },
    { id: 1835014, purpose: "Education Loan", status: "Pending" },
    { id: 1946015, purpose: "Personal Loan", status: "Approved" },
    { id: 2057016, purpose: "Business Loan", status: "Pending" },
    { id: 2168017, purpose: "Home Loan", status: "Rejected" },
    { id: 2279018, purpose: "Car Loan", status: "Approved" },
    { id: 2390019, purpose: "Education Loan", status: "Pending" },
    { id: 241010, purpose: "Personal Loan", status: "Approved" },
    { id: 252110, purpose: "Business Loan", status: "Rejected" },
    { id: 263210, purpose: "Home Loan", status: "Pending" },
    { id: 274310, purpose: "Car Loan", status: "Approved" },
    { id: 285410, purpose: "Education Loan", status: "Pending" },
    { id: 296510, purpose: "Personal Loan", status: "Approved" },
  ]);

  const handleSave = (id) => {
    console.log(`Saving data for loan ID: ${id}`);
  };

  const columnDefs = [
    { headerName: "Loan ID", field: "id", filter: "agTextColumnFilter" },
    {
      headerName: "Purpose of Loan",
      field: "purpose",
      filter: "agTextColumnFilter",
    },
    { headerName: "Status", field: "status", filter: "agTextColumnFilter" },
    {
      headerName: "Action",
      field: "price",
      cellRenderer: () => (
        <div>
          <button className="btn-next ">Save</button>
        </div>
      ),
    },
  ];

  const frameworkComponents = {
    optionsRenderer: (props) => (
      <button className="btn-next" onClick={() => handleSave(props.data.id)}>
        Save
      </button>
    ),
  };

  return (
    <div className="container-dashboard">
      <h4 className="heading-text-smaller text-grey text-center pd20">
        Welcome User
      </h4>
      <div
        className="ag-theme-quartz"
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={loanData}
          frameworkComponents={frameworkComponents}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default Dashboard;
