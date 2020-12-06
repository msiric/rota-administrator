import Vue from "vue";
import Vuex from "vuex";
import { getData } from "../services/rotas";

Vue.use(Vuex);

const TOGGLE_OPTIONS = {
  ACCORDION: false,
  CALENDAR: true,
};

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    rotas: { data: [], loading: true, error: null },
    users: { data: {}, loading: true, error: null },
    selection: {},
    snackbar: {
      show: false,
      text: "",
      variant: "",
    },
    toggle: TOGGLE_OPTIONS.ACCORDION,
  },
  mutations: {
    setDataSuccess(state, data) {
      state.rotas = { data: data.rotas, loading: false, error: null };
      state.users = { data: data.users, loading: false, error: null };
    },
    setRotasSuccess(state, rotas) {
      state.rotas.data = rotas;
      state.rotas.loading = false;
    },
    setUsersSuccess(state, users) {
      state.users.data = users;
      state.users.loading = false;
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
  },
  actions: {
    async getData({ commit }) {
      try {
        const { data } = await getData.request();
        const rotas = data.rotas;
        const users = data.users.reduce(
          (obj, item) => Object.assign(obj, { [item.userId]: item.user }),
          {}
        );
        commit("setDataSuccess", { rotas, users });
      } catch (err) {
        commit("showSnackbar", {
          variant: getData.error.variant,
          text: getData.error.message,
        });
        commit("setDataError");
      }
    },
  },
  getters: {
    rotasFiltered(state) {
      return state.rotas.filter((rota) => !!state.selection[rota.userId]);
    },
  },
});
