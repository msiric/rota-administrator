<template>
  <v-snackbar :color="appSnackbar.variant" v-model="appSnackbar.show">
    {{ appSnackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="hideSnackbar()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    appSnackbar: {
      get() {
        return this.$store.getters.appSnackbar;
      },
    },
  },
  methods: {
    hideSnackbar() {
      this.$store.commit("hideSnackbar");
    },
  },
};
</script>

<style lang="scss">
div.v-snack:not(.v-snack--absolute) {
  height: 100%;
}
</style>
