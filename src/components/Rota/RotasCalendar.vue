<template>
  <div class="px-4 pb-4">
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title
        v-if="$refs.calendar"
        class="d-flex align-center text-decoration-underline"
      >
        {{ $refs.calendar.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="calendarRotas"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getColor"
        @click:event="showRota"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    calendarRotas: {
      get() {
        return this.$store.getters.filteredCalendarRotas;
      },
    },
  },
  data: () => ({
    type: "month",
    types: ["month"],
    mode: "stack",
    modes: ["stack"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [{ text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] }],
    value: "",
  }),
  methods: {
    getColor(event) {
      return event.color;
    },
    showRota(event) {
      console.log(event);
    },
  },
  mounted() {
    this.$refs.calendar.move(0);
  },
};
</script>

<style lang="scss">
.v-calendar {
  .v-event {
    div {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
