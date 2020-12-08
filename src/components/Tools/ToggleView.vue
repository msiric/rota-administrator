<template>
  <v-switch
    color="primary"
    class="mr-4"
    v-model="appToggle"
    light
    inset
    hide-details
    ><template v-slot:label>
      <span class="switch-label">{{
        `${appToggle ? "Calendar" : "Accordion"}`
      }}</span>
    </template></v-switch
  >
</template>

<script>
export default {
  computed: {
    appToggle: {
      get() {
        return this.$store.getters.appToggle;
      },
      set() {
        this.$store.commit("toggleSwitch");
      },
    },
  },
};
</script>

<style lang="scss">
.switch-label {
  color: white;
}
</style>
