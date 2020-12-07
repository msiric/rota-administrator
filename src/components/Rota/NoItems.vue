<template>
  <div class="no-items">
    <v-icon size="100" color="primary">mdi-check</v-icon>
    <p class="text-h5 primary--text">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style lang="scss">
.no-items {
  margin: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
