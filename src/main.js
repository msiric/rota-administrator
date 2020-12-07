import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  watch: {
    $route: function() {
      if (this.$route.path === "/about") {
        store.commit("hideControls");
      } else {
        store.commit("showControls");
      }
    },
  },
  render: (h) => h(App),
}).$mount("#app");
