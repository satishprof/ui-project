const express = require("express");
const app = express();

app.get("/loaninfo", (req, res) => {
  res.json(LoanInformation);
});
// app.get("/profileinfo", (req, res) => {
//   res.json(ProfileInformation);
// });
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const LoanInformation = [
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Home purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Home purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Medical purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Home purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Marriage purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Marriage purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Marriage purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Educations purpose",
    status: "Inprogress",
  },
];
