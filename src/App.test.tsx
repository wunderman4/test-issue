import { render, screen } from "test-utils";
import App from "./App";

describe("App", () => {
  it("should work", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("count is 0");
  });
});
