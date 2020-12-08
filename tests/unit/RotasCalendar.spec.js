import "@testing-library/jest-dom";
import RotasCalendar from "../../src/components/Rota/RotasCalendar";
import { renderWithVuetify } from "../test.config";

describe("RotasCalendar.vue", () => {
  test("renders rotas calendar successfully", async () => {
    renderWithVuetify(RotasCalendar);
    expect(RotasCalendar).toBeTruthy();
  });
});
