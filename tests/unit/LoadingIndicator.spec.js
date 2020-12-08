import "@testing-library/jest-dom";
import LoadingIndicator from "../../src/components/Tools/LoadingIndicator";
import { renderWithVuetify } from "../test.config";

describe("LoadingIndicator.vue", () => {
  test("renders loading indicator successfully", async () => {
    renderWithVuetify(LoadingIndicator);
    expect(LoadingIndicator).toBeTruthy();
  });
});
