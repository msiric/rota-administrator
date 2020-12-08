import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor } from "@testing-library/vue";
import AppBar from "../../src/components/Shared/AppBar";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("AppBar.vue", () => {
  const store = {
    ...mockStore,
    mutations: { ...mockStore.mutations, toggleDialog: jest.fn() },
  };

  test("renders dialog on click", async () => {
    renderWithVuetify(AppBar, { store });
    const generateButton = screen.getByTestId("generateRota");
    const datePicker = screen.queryByTestId("datePicker");
    expect(generateButton).toBeTruthy();
    expect(datePicker).toBeFalsy();
    await waitFor(() => {
      fireEvent.click(generateButton);
      expect(store.mutations.toggleDialog).toHaveBeenCalled();
      const cancelButton = screen.queryByText("Cancel");
      fireEvent.click(cancelButton);
      expect(store.mutations.toggleDialog).toHaveBeenCalled();
    });
  });
});
