<template>
  <p class="text-subtitle-1 mb-0">{{ date }}</p>
</template>

<script>
import { format } from "date-fns";

export default {
  data: () => ({
    date: "",
  }),
  methods: {
    getDate() {
      this.date = format(new Date(), "PPP, H:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
