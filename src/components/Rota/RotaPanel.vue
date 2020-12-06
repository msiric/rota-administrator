<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Item
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { format } from "date-fns";

export default {
  props: ["rota"],
  data: () => ({}),
  filters: {
    formattedDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
};
</script>

<style lang="scss"></style>
