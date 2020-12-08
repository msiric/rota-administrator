import "@testing-library/jest-dom";
import LiveDateTime from "../../src/components/Tools/LiveDateTime";
import { renderWithVuetify } from "../test.config";

describe("LiveDateTime.vue", () => {
  test("renders live date and time successfully", async () => {
    renderWithVuetify(LiveDateTime);
    expect(LiveDateTime).toBeTruthy();
  });
});
