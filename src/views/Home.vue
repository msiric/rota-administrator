<template>
  <div class="full-height">
    <div class="full-height" v-if="!appLoading">
      <div v-if="appToggle">
        <rotas-calendar />
      </div>
      <div v-else>
        <rotas-accordion v-if="appRotas.length" />
        <no-items v-else label="No rotas" />
      </div>
    </div>
    <loading-indicator v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    appLoading: {
      get() {
        return this.$store.getters.appLoading;
      },
    },
    appToggle: {
      get() {
        return this.$store.getters.appToggle;
      },
    },
    appRotas: {
      get() {
        return this.$store.getters.appRotas;
      },
    },
  },
  components: {
    "rotas-accordion": require("@/components/Rota/RotasAccordion.vue").default,
    "no-items": require("@/components/Rota/NoItems.vue").default,
    "rotas-calendar": require("@/components/Rota/RotasCalendar.vue").default,
    "date-picker": require("@/components/Tools/DatePicker.vue").default,
    "loading-indicator": require("@/components/Tools/LoadingIndicator.vue")
      .default,
  },
};
</script>

<style lang="scss">
.full-height {
  height: 100%;
}
</style>
