import "@testing-library/jest-dom";
import Vue from "vue";
import { render } from "@testing-library/vue";
import Vuetify from "vuetify";
import { format } from "date-fns";
import { mockStore } from "./__mocks__/store";

Vue.filter("formattedDate", (date) => format(new Date(date), "PPP"));

Vue.use(Vuetify);

export const renderWithVuetify = (
  component,
  options = { props: {}, store: {} },
  callback
) => {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return render(
    component,
    {
      container: document.body.appendChild(root),
      // for Vuetify components that use the $vuetify instance property
      vuetify: new Vuetify(),
      store: { ...mockStore, ...options.store },
      ...options,
    },
    callback
  );
};
