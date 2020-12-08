import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor } from "@testing-library/vue";
import RotaPanel from "../../src/components/Rota/RotaPanel";
import { renderWithVuetify } from "../test.config";

describe("RotaPanel.vue", () => {
  const props = {
    rota: {
      userId: 1,
      type: "morning",
      date: "2020-11-01",
    },
    rotaId: 11,
  };

  test("renders rota header correctly", async () => {
    renderWithVuetify(RotaPanel, {
      props,
    });
    const header = screen.getByText(
      "November 1st, 2020 - John Smith (morning)"
    );
    expect(header).toBeTruthy();
    expect(header.classList.contains("primary--text"));
  });

  test("renders rota content correctly", async () => {
    renderWithVuetify(RotaPanel, {
      props,
    });
    await waitFor(() => {
      fireEvent.click(
        screen.getByText("November 1st, 2020 - John Smith (morning)")
      );
      expect(screen.getByText("2020-11-01")).toBeTruthy();
    });
  });
});
