const getData = {
  request: () => null,
  success: { message: "Rotas successfully fetched", variant: "success" },
  error: { message: "Failed to fetch rotas", variant: "error" },
};
const generateRota = {
  request: () => null,
  success: { message: "Rota successfully generated", variant: "success" },
  error: { message: "Failed to generate rota", variant: "error" },
};

const TOGGLE_OPTIONS = {
  ACCORDION: false,
  CALENDAR: true,
};

export const mockStore = {
  state: {
    appTitle: "Rota Administrator",
    rotas: [
      {
        period: { endDate: "2020-11-10", startDate: "2020-11-01" },
        rota: [{ date: "2020-11-01", type: "morning", userId: 1 }],
        rotaID: 11,
      },
      {
        period: { endDate: "2020-11-20", startDate: "2020-11-11" },
        rota: [{ date: "2020-11-11", type: "morning", userId: 10 }],
        rotaID: 12,
      },
    ],
    users: {
      1: { name: "John Smith", id: 1 },
      10: { name: "Beef Patty", id: 10 },
    },
    selection: { 1: true, 10: true },
    snackbar: {
      show: false,
      text: "",
      variant: "",
    },
    loading: false,
    error: null,
    dialog: null,
    controls: true,
    drawer: true,
    toggle: TOGGLE_OPTIONS.ACCORDION,
    dialog: null,
  },
  mutations: {
    setDataSuccess(state, data) {
      state.rotas = data.rotas;
      state.users = data.users;
      state.loading = false;
      state.error = null;
    },
    setDataError(state, error) {
      state.rotas = [];
      state.users = {};
      state.loading = false;
      state.error = error;
    },
    setSelection(state, selection) {
      state.selection = selection;
    },
    toggleUserSelection(state, id) {
      state.selection = { ...state.selection, [id]: !state.selection[id] };
    },
    showSnackbar(state, payload) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = payload.text;
        state.snackbar.variant = payload.variant;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
    toggleDialog(state) {
      state.dialog = !state.dialog;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleSwitch(state) {
      state.toggle = !state.toggle;
    },
    showControls(state) {
      state.controls = true;
    },
    hideControls(state) {
      state.controls = false;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const { data } = await getData.request();
        const rotas = data.rotas;
        const users = data.users.reduce(
          (obj, item) =>
            Object.assign(obj, {
              [item.userId]: { name: item.user, id: item.userId },
            }),
          {}
        );
        const selection = data.users.reduce(
          (obj, item) =>
            Object.assign(obj, {
              [item.userId]: true,
            }),
          {}
        );
        commit("setDataSuccess", { rotas, users });
        commit("setSelection", selection);
      } catch (err) {
        commit("showSnackbar", {
          variant: getData.error.variant,
          text: getData.error.message,
        });
        commit("setDataError", getData.error.message);
      }
    },
    async generateRota({ commit }, date) {
      try {
        await generateRota.request();
        commit("showSnackbar", {
          variant: generateRota.success.variant,
          text: generateRota.success.message,
        });
        commit("toggleDialog");
      } catch (err) {
        commit("showSnackbar", {
          variant: generateRota.error.variant,
          text: generateRota.error.message,
        });
      }
    },
  },
  getters: {
    appRotas(state) {
      return state.rotas;
    },
    appUsers(state) {
      return state.users;
    },
    appUser: (state) => (id) => {
      return state.users[id];
    },
    appSelection(state) {
      return state.selection;
    },
    appControls(state) {
      return state.controls;
    },
    appTitle(state) {
      return state.appTitle;
    },
    appLoading(state) {
      return state.loading;
    },
    appSnackbar(state) {
      return state.snackbar;
    },
    appDialog(state) {
      return state.dialog;
    },
    appDrawer(state) {
      return state.drawer;
    },
    appToggle(state) {
      return state.toggle;
    },
    filteredAccordionRotas: (state) => (rota) => {
      return rota.filter((item) => !!state.selection[item.userId]);
    },
    filteredCalendarRotas(state) {
      const flattenedRotas = state.rotas.map((item) => item.rota).flat();
      const filteredRotas = flattenedRotas.filter(
        (item) => !!state.selection[item.userId]
      );
      return filteredRotas.map((rota) => ({
        name:
          rota.type === "morning"
            ? `Morning - ${state.users[rota.userId].name}`
            : `Afternoon - ${state.users[rota.userId].name}`,
        start: rota.date,
        color: rota.type === "morning" ? "primary" : "indigo",
        userId: rota.userId,
        username: state.users[rota.userId].name,
      }));
    },
  },
};
