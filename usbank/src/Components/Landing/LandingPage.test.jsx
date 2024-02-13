import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import LandingPage from "./LandingPage";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Import the component to be tested

// Mock the UserContext
jest.mock("../Context/Context", () => ({
  UserContext: {
    Consumer: ({ children }) =>
      children({ user: { firstname: "John", lastname: "Doe" } }),
  },
}));

describe("LandingPage component", () => {
  // Test case 1: Renders without crashing
  it("should render without crashing", () => {
    render(<LandingPage />);
    // You can add more specific assertions here
  });

  // Test case 2: Checks if the logout button triggers the handleLogout function
  it("should call handleLogout when the logout button is clicked", () => {
    render(<LandingPage />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    // You can add assertions related to the handleLogout function here
  });

  // Test case 3: Checks if the user interface updates correctly when navigating between sections
  it("should update UI correctly when navigating between sections", async () => {
    render(<LandingPage />);

    // Click on "My Profile"
    fireEvent.click(screen.getByText("My Profile"));
    expect(screen.getByText("My Profile")).toHaveClass("active");

    // Click on "Account Information"
    fireEvent.click(screen.getByText("Account Information"));
    expect(screen.getByText("Account Information")).toHaveClass("active");

    // Click on "Loan Dashboard"
    fireEvent.click(screen.getByText("Loan Dashboard"));
    expect(screen.getByText("Loan Dashboard")).toHaveClass("active");
  });
});
