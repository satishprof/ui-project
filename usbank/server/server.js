const express = require("express");
const cors = require("cors");
const app = express();
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

const allowedOrigins = ["http://localhost:3000"];

// Set up CORS with options

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is allowed or is undefined (e.g., for same-origin requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/loaninfo", (req, res) => {
  res.json(LoanInformation);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
