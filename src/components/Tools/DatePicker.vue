<template>
  <v-dialog ref="dialog" v-model="$store.state.dialog" persistent width="290px">
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="toggleDialog()">
        Cancel
      </v-btn>
      <v-btn text color="primary" @click="generateRota()">
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({ date: new Date().toISOString().substr(0, 10) }),
  methods: {
    toggleDialog() {
      this.$store.commit("toggleDialog");
    },
    generateRota() {
      this.$store.dispatch("generateRota", this.date);
    },
  },
};
</script>

<style></style>
