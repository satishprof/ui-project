import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";
import "../Styles.css";
import ConfirmBox from "../ConfirmBox/ConfirmBox";

const LandingPageGrid = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const navigate = useNavigate();
  const [id, setId] = useState("-1");
  const [showPopup, setShowPopup] = useState(false);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    axios
      .put("http://localhost:4000/loandetails/145", { name: "name", id: "id" })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleYesBtn = () => {
    if (actionType && actionType === "EDIT") {
      setId("-1");
      setShowPopup(false);
      setActionType("");
      navigate("/myprofile", { state: { id: id, data: selectedData } });
    }
    if (actionType && actionType === "DELETE") {
      axios
        .delete(`http://localhost:4000/loandetails/${id}`, {
          name: "name",
          id: "id",
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setId("-1");
      setShowPopup(false);
      setActionType("");
    }
  };
  const handleNoBtn = () => {
    setShowPopup(false);
    setActionType("");
  };
  const columns = [
    { Header: "Loan Id", accessor: "id" },
    { Header: "Purpose of Loan", accessor: "purpose" },
    { Header: "Status", accessor: "status" },
    {
      Header: "Options",
      accessor: "options",
      Cell: ({ row }) => (
        <>
          {row.original.status === "Submitted" ? (
            <button
              className={"btn btn-container btn-danger"}
              onClick={() => handleButtonClick("DELETE", row.original.id)}
            >
              Delete
            </button>
          ) : (
            <button
              className={"btn btn-container"}
              style={{ backgroundColor: "#3498db" }}
              onClick={() =>
                handleButtonClick("EDIT", row.original.id, row.original)
              }
            >
              {}
              Edit
            </button>
          )}
        </>
      ),
    },
  ];

  const handleButtonClick = (type, id, data = {}) => {
    setId(id);
    setShowPopup(true);
    setActionType(type);
    setSelectedData(data);
  };

  const Grid = () => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      state: { pageIndex, globalFilter },
      setGlobalFilter,
      gotoPage,
      previousPage,
      nextPage,
      canPreviousPage,
      canNextPage,
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 6 },
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    );

    return (
      <div>
        <div>
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted && column.isSortedDesc ? " 🔽" : " 🔼"}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>{" "}
          <button
            onClick={() => gotoPage(pageIndex + 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {Math.ceil(data.length / 6)}
            </strong>{" "}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="App" data-testid="grid">
      <Grid />
      {showPopup && (
        <ConfirmBox
          handleYesBtn={handleYesBtn}
          handleNoBtn={handleNoBtn}
          description={
            actionType === "EDIT"
              ? "Are you sure, you want to edit the loan ?"
              : "Are you sure, you want to delete loann ?"
          }
          title={actionType === "EDIT" ? "Edit The Loan." : "Delete Loan"}
        />
      )}
    </div>
  );
};

export default LandingPageGrid;
