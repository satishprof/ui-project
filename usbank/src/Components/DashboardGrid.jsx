import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";

const DashboardGrid = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/loaninfo")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns = [
    { Header: "Loan Id", accessor: "id" },
    { Header: "Purpose of Loan", accessor: "purpose" },
    { Header: "Status", accessor: "status" },
    {
      Header: "Options",
      accessor: "options",
      Cell: ({ row }) => (
        <button onClick={() => handleButtonClick(row)}>
          {row.original.isEditing ? "Save" : "Edit"}
        </button>
      ),
    },
  ];

  const handleButtonClick = (row) => {
    // Handle the button click here
    console.log("Button Clicked for ID:", row.original.id);

    // If you want to modify the data when the button is clicked, you can use setData
    // For example, toggle the isEditing property
    setData((prevData) => {
      return prevData.map((item) => {
        console.log(item);
        if (item.id === row.original.id) {
          navigate("/myprofile");
          return { ...item, isEditing: !item.isEditing };
        }
        return item;
      });
    });
  };

  const GridTable = () => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      state: { pageIndex, pageSize, globalFilter },
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
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
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
              {pageIndex + 1} of {page.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <GridTable />
    </div>
  );
};

export default DashboardGrid;
