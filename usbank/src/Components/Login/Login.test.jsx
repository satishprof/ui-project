import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders Login component", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByTestId("login-header")).toBeInTheDocument();
    expect(screen.getByText("Please Login Here..")).toBeInTheDocument();
  });

  test("form submission with valid credentials", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "validUser" } });
    fireEvent.change(passwordInput, { target: { value: "validPassword" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/landingpage");
    });
  });

  test("form submission with invalid credentials", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "invalidUser" } });
    fireEvent.change(passwordInput, { target: { value: "invalidPassword" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Invalid Credentials");
    });
  });

  test("redirect to register page when clicking Register link", () => {
    const { container } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const registerLink = container.querySelector(".register-button");
    fireEvent.click(registerLink);
  });
});
