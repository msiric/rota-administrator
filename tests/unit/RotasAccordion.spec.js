import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/vue";
import RotasAccordion from "../../src/components/Rota/RotasAccordion";
import { renderWithVuetify } from "../test.config";
import { mockStore } from "../__mocks__/store";

describe("RotasAccordion.vue", () => {
  const store = {
    ...mockStore,
    getters: { ...mockStore.getters, appRotas: jest.fn() },
  };

  test("renders rota accordion correctly", async () => {
    renderWithVuetify(RotasAccordion, { store });
    await waitFor(() => {
      expect(store.getters.appRotas).toHaveBeenCalled();
    });
  });
});
