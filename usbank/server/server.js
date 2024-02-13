const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
let LoanInformation = [
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Home purpose",
    status: "Inprogress",
  },
  {
    id: Math.floor(Math.random() * 899999 + 100000),
    purpose: "Home purpose",
    status: "Submitted",
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
    status: "Submitted",
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
    status: "Submitted",
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
app.use(bodyParser.json());
app.get("/loandetails", (req, res) => {
  res.json(LoanInformation);
});
app.put("/loandetails/:id", (req, res) => {
  const { id } = req.params;
  const data = LoanInformation.map((e) =>
    e.id.toString() === id ? req.body : e
  );
  LoanInformation = data;
  res.json(data);
});
app.delete("/loandetails/:id", (req, res) => {
  const { id } = req.params;
  const data = LoanInformation.filter((e) => e.id.toString() !== id);
  LoanInformation = data;
  res.json(data);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
