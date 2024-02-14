import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../Context/Context";
import MyProfile from "./MyProfile";

describe("MyProfile", () => {
  const user = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
  };

  test("renders MyProfile component", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <MyProfile />
        </UserContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
    expect(screen.getByText("My Profile")).toBeInTheDocument();
  });

  test("form submission calls navigate with correct data", () => {
    const navigateMock = jest.fn();
    const { container } = render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <MyProfile />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);
    expect(navigateMock).toHaveBeenCalledWith("/account", {
      state: { id: undefined, data: undefined },
    });
  });

  test("Cancel button calls navigate to landing page", () => {
    const navigateMock = jest.fn();
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <MyProfile />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(navigateMock).toHaveBeenCalledWith("/landingpage");
  });
});
