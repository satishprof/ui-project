import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./HomePage";
import { MemoryRouter } from "react-router-dom";

test("renders welcome message", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const welcomeMessage = screen.getByText(/Welcome to US Bank/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test("renders registration link", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const registerLinks = screen.getAllByText(/Register/i);
  expect(registerLinks).toHaveLength(2); // Ensure there is exactly one matching element
  expect(registerLinks[0]).toBeInTheDocument();
});
