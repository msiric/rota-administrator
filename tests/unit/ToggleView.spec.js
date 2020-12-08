import "@testing-library/jest-dom";
import { screen, waitFor, fireEvent } from "@testing-library/vue";
import ToggleView from "../../src/components/Tools/ToggleView";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("ToggleView.vue", () => {
  const store = {
    ...mockStore,
    mutations: { ...mockStore.mutations, toggleSwitch: jest.fn() },
  };

  test("renders and switches toggle successfully", async () => {
    renderWithVuetify(ToggleView, { store });
    await waitFor(() => {
      const toggleButton = screen.getByText("Accordion");
      fireEvent.click(toggleButton);
      expect(store.mutations.toggleSwitch).toHaveBeenCalled();
    });
  });
});
