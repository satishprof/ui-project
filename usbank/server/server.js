// import "./accountInfo.json";
// import uniqueId from "uniqueid";
const uniqueId = require("uniqueid");
const express = require("express");
const app = express();

app.get("/loaninfo", (req, res) => {
  res.json(LoanInformation);
});
app.get("/profileinfo", (req, res) => {
  res.json(ProfileInformation);
});
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const LoanInformation = [
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
  {
    LoadId: uniqueId(),
    PurposeOfLoan: "Educations purpose",
    Status: "Inprogress",
    Options: "Edit",
  },
];

const ProfileInformation = [
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
  {
    FirstName: "",
    LastName: "",
    Email: "",
    Region: "",
  },
];
