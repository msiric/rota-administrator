import "@testing-library/jest-dom";
import { screen } from "@testing-library/vue";
import UserList from "../../src/components/Users/UserList";
import { renderWithVuetify } from "../test.config";

describe("UserList.vue", () => {
  const props = {
    users: {
      1: { name: "John Smith", id: 1 },
      10: { name: "Beef Patty", id: 10 },
    },
  };

  test("renders user list correctly", async () => {
    renderWithVuetify(UserList, {
      props,
    });
    expect(screen.queryByText("John Smith")).toBeTruthy();
    expect(screen.queryByText("Beef Patty")).toBeTruthy();
    expect(screen.queryByText("John Patty")).toBeFalsy();
  });
});
