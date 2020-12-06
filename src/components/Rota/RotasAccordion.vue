<template>
  <v-expansion-panels>
    <rota-panel v-for="rota in rotas" :key="rota.id" :rota="rota" />
  </v-expansion-panels>
</template>

<script>
export default {
  components: {
    "rota-panel": require("@/components/Rota/RotaPanel.vue").default,
  },
};
</script>

<style></style>
