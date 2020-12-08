import "@testing-library/jest-dom";
import { screen, waitFor, fireEvent } from "@testing-library/vue";
import Snackbar from "../../src/components/Shared/Snackbar";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("Snackbar.vue", () => {
  const store = {
    ...mockStore,
    state: {
      ...mockStore.state,
      snackbar: { show: true, text: "Test message", variant: "success" },
    },
    mutations: { ...mockStore.mutations, hideSnackbar: jest.fn() },
  };

  test("renders and closes snackbar successfully", async () => {
    renderWithVuetify(Snackbar, { store });
    await waitFor(() => {
      const closeButton = screen.getByText("Close");
      fireEvent.click(closeButton);
      expect(store.mutations.hideSnackbar).toHaveBeenCalled();
    });
  });
});
