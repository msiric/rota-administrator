<template>
  <v-app-bar
    app
    color="primary"
    dark
    src="https://picsum.photos/1920/1080?random"
    height="170"
    class="app-bar-container"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
      ></v-img>
    </template>
    <v-container
      class="header-container pa-0 d-flex flex-column justify-space-between"
    >
      <v-row class="d-flex justify-space-between align-center">
        <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <toggle-view
          :class="{
            control: true,
            'control-hidden': !$store.state.controls,
          }"
        />
      </v-row>
      <div class="d-flex justify-space-between align-center flex-grow-1">
        <div class="d-flex flex-column justify-end align-start">
          <v-toolbar-title class="app-title text-h4">{{
            appTitle
          }}</v-toolbar-title>
          <live-date-time></live-date-time>
        </div>
        <div class="d-flex justify-space-between align-center">
          <v-btn
            @click="toggleDialog()"
            :class="{
              control: true,
              'control-hidden': !appControls,
            }"
            fab
            dark
            small
            color="primary"
            data-testid="generateRota"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
    <date-picker />
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    appTitle: {
      get() {
        return this.$store.getters.appTitle;
      },
    },
    appControls: {
      get() {
        return this.$store.getters.appControls;
      },
    },
  },
  components: {
    "toggle-view": require("@/components/Tools/ToggleView.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    "user-list": require("@/components/Users/UserList.vue").default,
    "loading-indicator": require("@/components/Tools/LoadingIndicator.vue")
      .default,
    "date-picker": require("@/components/Tools/DatePicker.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    toggleDialog() {
      this.$store.commit("toggleDialog");
    },
  },
};
</script>

<style lang="scss">
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined).app-bar-container {
  box-shadow: none;
}
.header-container.container {
  height: 100%;
  max-width: none;
}
.v-toolbar__title.app-title {
  white-space: pre-line;
}
</style>
