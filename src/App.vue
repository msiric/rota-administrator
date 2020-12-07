<template>
  <v-app>
    <navigation />
    <app-bar />
    <v-main>
      <v-scroll-x-transition hide-on-leave>
        <router-view></router-view>
      </v-scroll-x-transition>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getData");
  },
  components: {
    "toggle-view": require("@/components/Tools/ToggleView.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    "user-list": require("@/components/Users/UserList.vue").default,
    "loading-indicator": require("@/components/Tools/LoadingIndicator.vue")
      .default,
    "app-bar": require("@/components/Shared/AppBar.vue").default,
    navigation: require("@/components/Shared/Navigation.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
  },
};
</script>

<style lang="scss">
.control {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.2s linear, opacity 0.2s linear;
}
.control-hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s linear, opacity 0.2s linear;
}
</style>
