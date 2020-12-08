import "@testing-library/jest-dom";
import { screen } from "@testing-library/vue";
import NoItems from "../../src/components/Rota/NoItems";
import { renderWithVuetify } from "../test.config";

describe("NoItems.vue", () => {
  const props = { label: "No items" };

  test("displays passed label for no items", async () => {
    renderWithVuetify(NoItems, { props });
    expect(screen.queryByText("No items")).toBeTruthy();
  });
});
