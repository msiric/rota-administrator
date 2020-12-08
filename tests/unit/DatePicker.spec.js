import "@testing-library/jest-dom";
import { screen, waitFor, fireEvent } from "@testing-library/vue";
import DatePicker from "../../src/components/Tools/DatePicker";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("DatePicker.vue", () => {
  const store = {
    ...mockStore,
    state: {
      ...mockStore.state,
      dialog: true,
    },
    mutations: {
      ...mockStore.mutations,
      toggleDialog: jest.fn(),
    },
    actions: {
      ...mockStore.actions,
      generateRota: jest.fn(),
    },
  };

  test("renders and closes dialog successfully", async () => {
    renderWithVuetify(DatePicker, { store });
    await waitFor(() => {
      const cancelButton = screen.getByText("Cancel");
      fireEvent.click(cancelButton);
      expect(store.mutations.toggleDialog).toHaveBeenCalled();
    });
  });

  test("renders and generates new rota successfully", async () => {
    renderWithVuetify(DatePicker, { store });
    await waitFor(() => {
      const okButton = screen.getByText("OK");
      fireEvent.click(okButton);
      expect(store.actions.generateRota).toHaveBeenCalled();
    });
  });
});
