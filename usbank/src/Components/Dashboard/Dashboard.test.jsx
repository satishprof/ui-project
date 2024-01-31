import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("Expect Dashboard to render", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-dashboard")).toBeInTheDocument();
  });
});
