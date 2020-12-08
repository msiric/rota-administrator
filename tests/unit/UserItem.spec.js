import "@testing-library/jest-dom";
import { screen, waitFor, fireEvent } from "@testing-library/vue";
import UserItem from "../../src/components/Users/UserItem";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("UserItem.vue", () => {
  const store = {
    ...mockStore,
    mutations: { ...mockStore.mutations, toggleUserSelection: jest.fn() },
  };
  const props = { user: { name: "John Smith", id: 1 } };

  test("renders and selects/deselects user successfully", async () => {
    renderWithVuetify(UserItem, {
      store,
      props,
    });
    await waitFor(() => {
      const checkBox = screen.queryByTestId("userCheckbox-1");
      fireEvent.click(checkBox);
      expect(store.mutations.toggleUserSelection).toHaveBeenCalled();
    });
  });
});
