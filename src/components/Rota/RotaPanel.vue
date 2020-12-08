<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      class="font-weight-bold"
      :class="{
        'primary--text': rota.type === 'morning',
        'indigo--text': rota.type === 'afternoon',
      }"
    >
      {{ rota.date | formattedDate }} - {{ user.name }} ({{ rota.type }})
    </v-expansion-panel-header>
    <v-expansion-panel-content class="accordion-content">
      <v-list>
        <v-list-item v-for="item in items" :key="item.label">
          <v-icon class="mr-4">{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="text-capitalize">
            <v-list-item-title>{{ item.content }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import "../../helpers/filters";

export default {
  props: ["rota", "rotaId"],
  computed: {
    user: {
      get() {
        return this.$store.getters.appUser(this.rota.userId);
      },
    },
  },
  data: () => ({
    items: [],
  }),
  created() {
    this.items = [
      {
        label: "User ID",
        icon: "mdi-account-key",
        content: this.user.id,
      },
      {
        label: "Employee",
        icon: "mdi-account-circle",
        content: this.user.name,
      },
      {
        label: "Date",
        icon: "mdi-calendar",
        content: this.rota.date,
      },
      { label: "Daytime", icon: "mdi-clock-outline", content: this.rota.type },
      { label: "Rota ID", icon: "mdi-table-key", content: this.rotaId },
    ];
  },
};
</script>

<style lang="scss">
.accordion-content {
  .v-expansion-panel-content__wrap {
    padding: 0 8px 16px;
  }
}
</style>
