<template>
  <div class="px-4 pb-4">
    <div v-for="item in appRotas" :key="item.rotaID">
      <v-toolbar-title
        class="accordion-heading text-center my-3 text-decoration-underline"
      >
        {{ item.period.startDate | formattedDate }} -
        {{ item.period.endDate | formattedDate }}
      </v-toolbar-title>
      <v-expansion-panels inset v-if="accordionRotas(item.rota).length">
        <rota-panel
          v-for="rota in accordionRotas(item.rota)"
          :key="rota.id"
          :rota="rota"
          :rotaId="item.rotaID"
        />
      </v-expansion-panels>
      <div class="no-items-container" v-else>
        <v-expansion-panels>
          <v-expansion-panel>
            <no-items label="No items in this rota" />
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
import "../../helpers/filters";

export default {
  computed: {
    appRotas: {
      get() {
        return this.$store.getters.appRotas;
      },
    },
    accordionRotas: {
      get() {
        return this.$store.getters.filteredAccordionRotas;
      },
    },
  },
  components: {
    "rota-panel": require("@/components/Rota/RotaPanel.vue").default,
    "no-items": require("@/components/Rota/NoItems.vue").default,
  },
};
</script>

<style lang="scss">
.accordion-heading {
  white-space: break-spaces;
}
.no-items-container {
  height: 100%;
}
</style>
