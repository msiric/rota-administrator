import "@testing-library/jest-dom";
import { screen } from "@testing-library/vue";
import Navigation from "../../src/components/Shared/Navigation";
import { renderWithVuetify } from "../test.config";

describe("Navigation.vue", () => {
  test("renders navigation correctly when controls are off", async () => {
    renderWithVuetify(Navigation);
    const navHeading = screen.queryAllByText("About");
    expect(navHeading).toBeTruthy();
  });
});
