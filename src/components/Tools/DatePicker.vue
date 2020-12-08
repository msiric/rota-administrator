<template>
  <v-dialog ref="dialog" v-model="appDialog" persistent width="290px">
    <v-date-picker v-model="date" scrollable data-testid="datePicker">
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
  computed: {
    appDialog: {
      get() {
        return this.$store.getters.appDialog;
      },
    },
  },
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
