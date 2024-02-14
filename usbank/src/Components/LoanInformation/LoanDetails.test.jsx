import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../Context/Context";
import LoanDetails from "./LoanDetails";

describe("LoanDetails", () => {
  const user = {
    email: "john.doe@example.com",
  };

  const location = {
    state: {
      id: 123,
      date: {
        /* your date object here */
      },
    },
  };

  test("renders LoanDetails component", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <LoanDetails />
        </UserContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("container-box")).toBeInTheDocument();
    expect(screen.getByText("Loan Details")).toBeInTheDocument();
  });

  test("form submission with valid data", async () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <LoanDetails />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/landingpage");
    });
  });

  test("Cancel button redirects to landing page", () => {
    const { container } = render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <LoanDetails />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const cancelButton = container.querySelector('button[type="button"]');
    fireEvent.click(cancelButton);
  });
});
