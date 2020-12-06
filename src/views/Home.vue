<template>
  <div class="home">
    <rotas-accordion v-if="$store.state.rotas.data.length" />
    <no-rotas v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    "rotas-accordion": require("@/components/Rota/RotasAccordion.vue").default,
    "no-rotas": require("@/components/Rota/NoRotas.vue").default,
  },
};
</script>

<style lang="scss"></style>
