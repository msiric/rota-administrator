<template>
  <v-snackbar
    :color="$store.state.snackbar.variant"
    v-model="$store.state.snackbar.show"
  >
    {{ $store.state.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('hideSnackbar')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.v-snack:not(.v-snack--absolute) {
  height: 100%;
}
</style>
