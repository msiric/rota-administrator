<template>
  <div>
    <v-list-item @click="toggleUserSelection(user.id)">
      <v-checkbox
        class="user-checkbox mr-2"
        :input-value="appSelection[user.id]"
        dense
        hide-details
        :data-testid="`userCheckbox-${user.id}`"
      ></v-checkbox>
      <v-list-item-content>
        <v-list-item-title class="text-subtitle-1">{{
          user.name
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: ["user"],
  computed: {
    appSelection: {
      get() {
        return this.$store.getters.appSelection;
      },
    },
  },
  methods: {
    toggleUserSelection(id) {
      this.$store.commit("toggleUserSelection", id);
    },
  },
};
</script>

<style lang="scss">
.user-checkbox.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}
</style>
