// UserData should output two input fields => for name and age
<template>
  <form @click.prevent>
    <div>
      <label>Username</label>
      <input v-model="username" type="text" />
    </div>
    <div>
      <label>Age</label>
      <input v-model="age" type="text" />
    </div>
    <button @click="submitUser">Submit</button>
  </form>
</template>
<script>
export default {
  methods: {
    submitUser() {
      this.$emit("new-user", this.username, this.age);
      this.username = "";
      this.age = "";
    },
  },
};
</script>
