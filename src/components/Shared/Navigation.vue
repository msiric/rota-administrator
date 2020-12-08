<template>
  <v-navigation-drawer
    class="nav-container"
    v-model="$store.state.drawer"
    :mobile-breakpoint="768"
    app
  >
    <v-img
      class="pa-4 pt-6"
      height="170"
      src="https://picsum.photos/1920/1080?random"
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
    >
      <div>
        <v-avatar size="70" class="mb-2"
          ><img src="../../../public/Avatar.png"
        /></v-avatar>
        <div class="white--text text-h5 font-weight-bold">
          {{ `${appControls ? "Users" : "About"}` }}
        </div>
        <div class="white--text text-subtitle-2">
          {{ `${appControls ? "Manage users" : "About Rota Administrator"}` }}
        </div>
      </div>
    </v-img>

    <div class="users-container">
      <div class="flex-grow-1">
        <div class="full-height flex-grow-1" v-if="appControls">
          <user-list :users="appUsers" v-if="!appLoading" />
          <loading-indicator v-else />
        </div>
        <div class="about pa-4" v-else>
          <h1>Created by:</h1>
          <p>Mario Širić</p>
        </div>
      </div>
      <v-list dense class="d-flex pa-0">
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-clipboard-list", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  computed: {
    appControls: {
      get() {
        return this.$store.getters.appControls;
      },
    },
    appUsers: {
      get() {
        return this.$store.getters.appUsers;
      },
    },
    appLoading: {
      get() {
        return this.$store.getters.appLoading;
      },
    },
  },
  components: {
    "toggle-view": require("@/components/Tools/ToggleView.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    "user-list": require("@/components/Users/UserList.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
    "loading-indicator": require("@/components/Tools/LoadingIndicator.vue")
      .default,
  },
};
</script>

<style lang="scss">
.theme--light.v-navigation-drawer.nav-container {
  background-color: #f7f7f7;
}
.users-container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 170px);
}
.full-height {
  height: 100%;
}
</style>
