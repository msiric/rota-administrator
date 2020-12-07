<template>
  <v-switch
    color="primary"
    class="mr-4"
    v-model="$store.state.toggle"
    light
    inset
    hide-details
    ><template v-slot:label>
      <span class="switch-label">{{
        `${$store.state.toggle ? "Calendar" : "Accordion"}`
      }}</span>
    </template></v-switch
  >
</template>

<style lang="scss">
.switch-label {
  color: white;
}
</style>
