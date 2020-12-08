<template>
  <v-list dense class="pa-0" data-testid="userList">
    <user-item v-for="user in users" :key="user.id" :user="user" />
  </v-list>
</template>

<script>
export default {
  props: ["users"],
  components: {
    "user-item": require("@/components/Users/UserItem.vue").default,
  },
};
</script>
