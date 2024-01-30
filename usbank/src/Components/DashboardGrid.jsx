import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Profile.css";

const DashboardGrid = () => {
  const [isEdit, setIsEdit] = useState();
  console.log(isEdit);
  const [loanData, setLoanData] = useState([
    {
      id: 1110011,
      purpose: "Home Loan",
      status: "Approved",
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
  const navigate = useNavigate();
  const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedin-user"));

  useEffect(() => {
    if (!loggedInUserInfo) {
      navigate("/");
    }
  }, []);

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
          <button
            className="btn-next"
            onClick={() => {
              setIsEdit(false);
              console.log(isEdit);
              navigate("/myprofile");
            }}
          >
            {isEdit ? "Edit" : "Save"}
          </button>
        </div>
      ),
    },
  ];

  // const frameworkComponents = {
  //   optionsRenderer: (props) => (
  //     <button className="btn-next" onClick={() => handleSave(props.data.id)}>
  //       Save
  //     </button>
  //   ),
  // };
  // enables pagination in the grid
  const pagination = true;

  // sets 8 rows per page (default is 100)
  const paginationPageSize = 8;
  return (
    <>
      <div
        className="ag-theme-quartz dashboard-grid"
        style={{ height: "150px", width: "85%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={loanData}
          // frameworkComponents={frameworkComponents}
          domLayout="autoHeight"
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationAutoPageSize={true}
        />
      </div>
    </>
  );
};

export default DashboardGrid;
