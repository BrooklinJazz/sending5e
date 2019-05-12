import React from "react";
import { render, cleanup } from "react-testing-library";
import App from "./index";

afterEach(cleanup);

describe("App Component", () => {
  it('Renders with data-testid "App"', () => {
    const { getByTestId } = render(<App />);
    getByTestId("App");
  });
});
