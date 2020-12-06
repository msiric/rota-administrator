<template>
  <v-switch
    color="primary"
    v-model="$store.state.toggle"
    :label="`${$store.state.toggle ? 'Calendar' : 'Accordion'}`"
    light
  ></v-switch>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss"></style>
