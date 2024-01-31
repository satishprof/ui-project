import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import DashboardGrid from "./DashboardGrid";

describe("Dashboardgrid", () => {
  test("Expect DashboardGrid to render", () => {
    render(
      <BrowserRouter>
        <DashboardGrid />
      </BrowserRouter>
    );
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });
});
