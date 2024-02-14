import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import LoanDetails from "./LoanDetails";

describe("LoanDetails", () => {
  // Mock the react-router-dom useNavigate hook
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

  // Mock the UserContext
  jest.mock("../Context/Context", () => ({
    UserContext: {
      Consumer: ({ children }) =>
        children({
          user: {
            firstname: "John",
            lastname: "Doe",
            email: "satish1234@gmail.com",
          },
        }),
    },
  }));

  test("Expect LoanDetails to render", () => {
    render(
      <BrowserRouter>
        <LoanDetails />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});
