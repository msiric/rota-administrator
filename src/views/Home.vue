<template>
  <div class="full-height">
    <div class="full-height" v-if="!$store.state.loading">
      <div v-if="$store.state.toggle">
        <rotas-calendar />
      </div>
      <div v-else>
        <rotas-accordion v-if="$store.state.rotas.length" />
        <no-items v-else label="No rotas" />
      </div>
    </div>
    <loading-indicator v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
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
