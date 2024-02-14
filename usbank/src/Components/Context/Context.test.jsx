import React from "react";
import { render, screen } from "@testing-library/react";
import { ContextProvider, UserContext } from "./Context"; // Replace with the actual file name

describe("ContextProvider", () => {
  test("renders ContextProvider with default user values", () => {
    render(
      <ContextProvider>
        <UserContext.Consumer>
          {(value) => {
            expect(value.user.firstname).toBe("");
            expect(value.user.lastname).toBe("");
            expect(value.user.email).toBe("");
          }}
        </UserContext.Consumer>
      </ContextProvider>
    );
  });

  test("renders ContextProvider with user values from sessionStorage", () => {
    // Mock sessionStorage.getItem
    jest
      .spyOn(window.sessionStorage, "getItem")
      .mockReturnValue(
        JSON.stringify([
          { firstname: "John", lastname: "Doe", mail: "john.doe@example.com" },
        ])
      );

    render(
      <ContextProvider>
        <UserContext.Consumer>
          {(value) => {
            expect(value.user.firstname).toBe("John");
            expect(value.user.lastname).toBe("Doe");
            expect(value.user.email).toBe("john.doe@example.com");
          }}
        </UserContext.Consumer>
      </ContextProvider>
    );

    // Restore the original implementation after the test
    jest.restoreAllMocks();
  });
});
