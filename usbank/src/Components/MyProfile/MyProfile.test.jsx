import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import MyProfile from "./MyProfile";

describe("MyProfile", () => {
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

  test("Expect MyProfile to render", () => {
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});
